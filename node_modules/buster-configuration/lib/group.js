var Path = require("path");
var url = require("url");
var fs = require("fs");
var crypto = require("crypto");
var _ = require("lodash");
var when = require("when");
var async = require("async");
var bane = require("bane");
var rr = require("ramp-resources");

var CONFIG_OPTIONS = ["autoRun"];
var LOAD_ALIASES = ["deps", "libs", "src", "sources",
                    "specHelpers", "specs", "testHelpers", "tests"];

var KNOWN_OPTIONS = LOAD_ALIASES.concat(
    ["resources", "environment", "rootPath", "extends", "env",
         "server", "options", "serverString", "name", "autoRun", "extensions"]
);

var UNKNOWN_OPTION_HELP = {
    "load": "Did you mean one of: deps, libs, src, sources, testHelpers, " +
        "tests, specHelpers, specs?",
    "extend": "Did you mean extends?"
};

function addUnique(arr1, arr2) {
    arr1 = arr1 || [];
    (arr2 || []).forEach(function (item) {
        if (arr1.indexOf(item) < 0) { arr1.push(item); }
    });
    return arr1;
}

function extractResources(o) {
    return {
        resources: o.resources || [],
        libs: addUnique(o.deps, o.libs),
        sources: addUnique(o.src, o.sources),
        testHelpers: addUnique(o.specHelpers, o.testHelpers),
        tests: addUnique(o.specs, o.tests)
    };
}

function extractOptions(opt) {
    return CONFIG_OPTIONS.reduce(function (options, key) {
        if (opt.hasOwnProperty(key)) { options[key] = opt[key]; }
        return options;
    }, {});
}

function extractServer(options) {
    if (!options.server) { return; }
    if (!/^[a-z]+:\/\//i.test(options.server)) {
        options.server = "http://" + options.server;
    }
    var server = url.parse(options.server);
    server.port = parseInt(server.port, 10);
    return server;
}

function extractExtensions(config) {
    var extensions = config.extensions || [];
    if (!Array.isArray(extensions)) { return; }
    return extensions.map(function (ext) {
        var extConfig = config[ext.name] || {};
        delete config[ext.name];
        return { name: ext.name, config: extConfig, extension: ext };
    });
}

function requireArray(config, setting) {
    if (config[setting] && !Array.isArray(config[setting])) {
        throw "`" + setting + "' should be an array";
    }
}

function unknownProperties(group) {
    var prop, help;

    for (prop in group) {
        if (group.hasOwnProperty(prop) && KNOWN_OPTIONS.indexOf(prop) < 0) {
            help = UNKNOWN_OPTION_HELP[prop];
            return new Error("Unknown configuration option '" + prop + "'" +
                (help ? "\n" + help : ""));
        }
    }

    try {
        requireArray(group, "extensions");
        requireArray(group, "resources");
    } catch (e) {
        return e;
    }
}

function mergeOptions(group, options) {
    var opt = {}, key, i, l;
    opt.resources = _.extend(group.resources, options.resources);

    for (i = 0, l = LOAD_ALIASES.length; i < l; ++i) {
        key = LOAD_ALIASES[i];
        options[key] = (group[key] || []).concat(options[key] || []);
    }

    return _.extend(group.config, opt, {
        environment: group.environment,
        rootPath: group.rootPath,
        server: group.serverString
    }, extractOptions(group.options), options);
}

function loadExtension(ext) {
    var module = ext.extension;
    if (!module) { return ext; }

    if (typeof module === "string") {
        throw new TypeError("Extensions should be objects. " +
                            "Perhaps you meant `require(\"" + module +
                            "\")`?");
    }

    if (typeof module.create === "function") {
        return module.create(ext.config);
    } else {
        return Object.create(module);
    }
}

function loadExtensions(extensions) {
    return (extensions || []).map(loadExtension);
}

function resourceSetFor(rs, group, section, done) {
    rs.appendLoad(group[section]).then(function () {
        group.emit("load:" + section, rs);
        rs.whenAllAdded(function () { done(null, rs); }, done);
    }, function (err) {
        done(err);
    });
}

function buildResourceSet(group, done) {
    var rs = rr.createResourceSet(group.rootPath);
    var frameworkResources = rr.createResourceSet("/");

    rs.addResources(group.resources).then(function () {
        async.parallel([
            function (next) {
                group.emit("load:framework", frameworkResources);
                next(null, frameworkResources);
            },
            resourceSetFor.bind(null, rs.concat(), group, "libs"),
            resourceSetFor.bind(null, rs.concat(), group, "sources"),
            resourceSetFor.bind(null, rs.concat(), group, "testHelpers"),
            resourceSetFor.bind(null, rs.concat(), group, "tests")
        ], function (err, results) {
            if (err) { return done(err); }
            when.all(results).then(function () {
                rs.concat.apply(rs, results).whenAllAdded(function (resourceSet) {
                    group.emit("load:resources", resourceSet);
                    resourceSet.whenAllAdded(done.bind(null, null), done);
                }, done);
            }, done);
        });
    }, function (err) {
        if (err) { done(err); }
    });
}

var cg = module.exports = _.extend(bane.createEventEmitter(), {
    create: function (options, rootPath) {
        options = options || {};
        return _.extend(Object.create(this), {
            config: _.extend({}, options),
            rootPath: Path.resolve(rootPath || "", options.rootPath || ""),
            server: extractServer(options),
            environment: options.environment || options.env,
            options: extractOptions(options),
            serverString: options.server,
            extensions: extractExtensions(options),
            error: unknownProperties(options)
        }, extractResources(options));
    },

    resolve: function () {
        var d = when.defer();
        if (this.rsPromise) { return this.rsPromise; }
        if (this.resourceSet) { return when(this.resourceSet); }

        if (this.error) {
            d.resolver.reject(this.error);
            return d.promise;
        }

        try {
            this.extensions = loadExtensions(this.extensions);
        } catch (e) {
            e.message = "Failed loading extensions: " + e.message;
            d.resolver.reject(e);
            return d.promise;
        }

        this.runExtensionHook("configure", this);
        this.rsPromise = d.promise;
        buildResourceSet(this, function (err, resourceSet) {
            this.resourceSet = resourceSet;
            delete this.rsPromise;
            if (err) { return d.resolver.reject(err); }
            d.resolver.resolve(resourceSet);
        }.bind(this));

        return d.promise;
    },

    extend: function (options, rootPath) {
        return cg.create(mergeOptions(this, options || {}), rootPath);
    },

    runExtensionHook: function (hook) {
        var args = Array.prototype.slice.call(arguments, 1);
        this.extensions = loadExtensions(this.extensions);
        this.extensions.filter(function (ext) {
            return typeof ext[hook] === "function";
        }).forEach(function (ext) {
            ext[hook].apply(ext, args);
        });
    }
});
