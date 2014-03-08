var B = require("buster-node");
var rr = require("../lib/ramp-resources");
var when = require("when");
var http = require("http");
var rmrf = require("rimraf");
var path = require("path");
var fs = require("fs");
var FIXTURES_ROOT = path.resolve(__dirname, "..", ".fixtures");
var samsam = require("samsam");

function extend() {
    var target = {};
    for (var i = 0, l = arguments.length; i < l; ++i) {
        for (var prop in arguments[i]) {
            target[prop] = arguments[i][prop];
        }
    }
    return target;
}

function verifyResourceError(message, e) {
    if (e.name !== "InvalidResourceError") {
        this.fail("Expected rr.createResource to fail with " +
                  "InvalidResourceError, but failed with " + e.name);
    }
    if (!new RegExp(message).test(e.message)) {
        this.fail("Expected InvalidResourceError message (" +
                  e.message + ") to match " + message);
    }
    return true;
}

B.referee.add("invalidResource", {
    assert: function (path, res, message) {
        try {
            if (typeof path === "string") {
                rr.createResource(path, res);
                return false;
            } else {
                var ret;
                path.addResource(res).then(function () {}, function (err) {
                    ret = verifyResourceError(message, err);
                });
                return ret;
            }
        } catch (e) {
            return verifyResourceError(message, e);
        }
    },
    assertMessage: "Expected to fail"
});

B.referee.add("content", {
    assert: function (resource, expected, done) {
        resource.content().then(done(function (actual) {
            B.referee.assert.same(actual, expected);
        }), done(function (err) {
            console.log(err.stack);
            B.referee.fail("content() rejected");
        }));
        return true;
    }
});

B.referee.add("resourceEqual", {
    assert: function (res1, res2, done) {
        var equal = res1.path === res2.path &&
            res1.etag === res2.etag &&
            res1.encoding === res2.encoding &&
            samsam.deepEqual(res1.headers(), res2.headers());
        if (!equal) { return false; }

        when.all([res1.content(), res2.content()]).then(function (contents) {
            assert.equals(contents[0], contents[1]);
            done();
        });
        return true;
    },
    assertMessage: "Expected resources ${0} and ${1} to be the same"
});

exports.reqBody = function (res, encoding, callback) {
    var data = "";
    res.setEncoding(encoding);
    res.on("data", function (chunk) { data += chunk; });
    res.on("end", function () { callback(data); });
};

exports.req = function (opt, callback) {
    opt = opt || {};
    var encoding = opt.encoding || "utf-8";
    delete opt.encoding;
    var req = http.request(extend({
        method: "GET",
        host: "localhost",
        port: 2233
    }, opt));
    req.on("response", function (res) {
        exports.reqBody(res, encoding, function (data) {
            if (callback) {
                callback(req, res, data);
            }
        });
    });
    return req;
};

exports.createServer = function createServer(middleware, done) {
    var server = http.createServer(function (req, res) {
        if (!middleware.respond(req, res)) {
            res.writeHead(418);
            res.end("Short and stout");
        }
    });
    server.listen(2233, done);
    return server;
};

exports.serverTearDown = function serverTearDown(done) {
    this.server.on("close", done);
    this.server.close();
};

exports.createProxyBackend = function (port) {
    var backend = { requests: [] };

    var server = http.createServer(function (req, res) {
        backend.requests.push({ req: req, res: res });
        if (backend.onRequest) {
            exports.reqBody(req, "utf-8", function (body) {
                backend.onRequest(req, res, body);
            });
        }
    });
    server.listen(port);

    backend.close = function (done) {
        var i, l;
        for (i = 0, l = backend.requests.length; i < l; ++i) {
            if (!backend.requests[i].res.ended) {
                backend.requests[i].res.end();
            }
        }
        server.on("close", done);
        server.close();
    };

    return backend;
};

exports.FIXTURES_ROOT = FIXTURES_ROOT;

exports.mkdir = function (dir) {
    dir = dir.replace(FIXTURES_ROOT, "").replace(/^\//, "");
    var dirs = [FIXTURES_ROOT].concat(dir.split("/")), tmp = "", i, l;
    for (i = 0, l = dirs.length; i < l; ++i) {
        if (dirs[i]) {
            tmp += dirs[i] + "/";
            try {
                fs.mkdirSync(tmp, "755");
            } catch (e) {}
        }
    }
};

exports.writeFile = function (file, contents) {
    file = path.join(FIXTURES_ROOT, file);
    this.mkdir(path.dirname(file));
    fs.writeFileSync(file, contents);
    return file;
};

exports.cdFixtures = function () {
    this.mkdir("");
    process.chdir(FIXTURES_ROOT);
};

exports.clearFixtures = function (done) {
    var mod;
    for (mod in require.cache) {
        if (/fixtures/.test(mod)) {
            delete require.cache[mod];
        }
    }
    rmrf(FIXTURES_ROOT, function (err) {
        if (err) { require("buster").log(err.toString()); }
        done();
    });
};

exports.referee = B.referee;