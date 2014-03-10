var ramp = require("ramp");
var Url = require("url");
var colorizer = require("ansi-colorizer");
var remoteRunner = require("./browser/remote-runner");
var reporters = require("buster-test").reporters;
var stackFilter = require("stack-filter");
var _ = require("lodash");

// Error codes, as per FreeBSD's sysexit(3)
// Errors are mapped to sysexit(3) error codes wherever that makes sense
var EX_DATAERR = 65;
var EX_SOFTWARE = 70;
var EX_TEMPFAIL = 75;
var EX_PROTOCOL = 76;
var EX_CONFIG = 78;

function serverURL(options) {
    var href = options && options.server || "";
    if (href && !/:\/\//.test(href)) { href = "http://" + href; }
    return Url.parse(href);
}

function createRampClient(options) {
    var url = serverURL(options);
    return ramp.createRampClient(url.port, url.hostname);
}

function terminalOptions(logger, options) {
    return {
        outputStream: logger.streamForLevel("log"),
        color: !!options.color,
        bright: !!options.bright
    };
}

function listenForUncaughtExceptions(sess, logger, S) {
    var listeners = sess.listeners && sess.listeners.uncaughtException || [];
    if (listeners.length > 0) { return; }
    sess.on("uncaughtException", function (msg) {
        logger.warn(S.yellow("Uncaught exception: " + msg.data.message));
    });
}

function opt(options, key, defaultValue) {
    return options.hasOwnProperty(key) ? options[key] : defaultValue;
}

function runnerOptions(options) {
    return {
        failOnNoAssertions: opt(options, "failOnNoAssertions", true),
        autoRun: opt(options, "autoRun", true),
        captureConsole: opt(options, "captureConsole", true),
        filters: opt(options, "filters", undefined)
    };
}

function noSlavesError(options) {
    var server = serverURL(options);
    server = server && server.href || "http://??";
    var error = new Error("No slaves connected, nothing to do.\n" +
                          "Capture browsers at " + server + " and try again.");
    error.code = EX_PROTOCOL;
    error.type = "NoSlavesError";
    return error;
}

function noSlaves(session, options, callback) {
    session.end();
    callback(noSlavesError(options));
}

function loadReporter(session, terminalOpt, options) {
    var server = serverURL(options);
    var host = server.hostname + ":" + server.port;

    var reporter = reporters.load(options.reporter || "brief").create(
        _.extend({
            logPassedMessages: !!options.logPassedMessages,
            displayProgress: false,
            verbosity: options.verbosity,
            stackFilter: stackFilter.configure({
                cwd: "http://" + host + session.getSession().resourcesPath,
                filters: !options.filterStacks ? [] : ["./buster/"]
            })
        }, terminalOpt)
    );
    reporter.contextsInPackageName = 2;
    return reporter;
}

function sessionError(options, callback, error) {
    if (/ECONNREFUSED/.test(error.message)) {
        var server = serverURL(options);
        error = new Error(
            "Unable to connect to server\n" +
                "Please make sure that buster-server is running at " +
                server.href
        );
        error.code = EX_TEMPFAIL;
    } else {
        error.message = "Failed creating session: " + error.message;
    }

    callback(error);
}

function extractFile(error) {
    var match = error.match(/'(.*)'/);
    if (!match) { return ""; }
    var cwd = process.cwd() + "/";
    return match[1].replace(cwd, "");
}

function configError(callback, err) {
    var error = err;

    if (/ENOENT/.test(err.message) && /'.*\*.*'/.test(err.message)) {
        error = new Error("Configured pattern '" + extractFile(err.message) +
                          "' does not match any files");
        error.code = EX_DATAERR;
    } else if (/ENOENT/.test(err.message)) {
        error = new Error("Configured path '" + extractFile(err.message) +
                          "' is not a file or directory");
        error.code = EX_DATAERR;
    }
    callback(error);
}

function cacheability(cacheable, resourceSet) {
    if (!cacheable) {
        resourceSet.forEach(function (resource) {
            resource.cacheable = false;
        });
    }
    return resourceSet;
}

var testRun = {
    create: function (config, options, logger, done) {
        var run = Object.create(this);
        run.config = config;
        run.options = options;
        run.callback = done;
        run.logger = logger;
        run.cacheable = options.cacheable;
        run.formatter = colorizer.configure(terminalOptions(logger, options));
        return run;
    },

    done: function (err) {
        if (!this.callback) { return; }
        if (err) { err.code = err.code || EX_SOFTWARE; }
        this.callback.apply(this, arguments);
        delete this.callback;
    },

    abort: function (err) {
        this.aborted = true;
        this.done(err);
    },

    endSession: function (session) {
        this.logger.info("Successfully closed session");
        session.endSession();
    },

    extensionHook: function () {
        try {
            this.config.runExtensionHook.apply(this.config, arguments);
        } catch (err) {
            err.code = EX_SOFTWARE;
            return err;
        }
    },

    createRemoteRunner: function (session) {
        return remoteRunner.create(session, this.logger);
    },

    attachReporter: function (runner, session) {
        var terminalOpt = terminalOptions(this.logger, this.options);
        loadReporter(session, terminalOpt, _.extend({
            verbosity: this.logger.level
        }, this.options)).listen(runner);
    },

    runTests: function (session, callback) {
        listenForUncaughtExceptions(session, this.logger, this.formatter);
        var runner = this.createRemoteRunner(session);
        this.attachReporter(runner, session);

        var hookError = this.extensionHook("beforeRun");

        if (hookError) {
            this.endSession(session);
            return callback(hookError);
        }

        runner.on("exception", function (err) {
            this.endSession(session);
            callback(err);
        }.bind(this));

        session.initialize().then(
            function (sessionClient) {
                var slaves = sessionClient.getInitialSlaves();

                if (slaves.length === 0) {
                    return noSlaves(sessionClient, this.options, callback);
                }

                runner.setSlaves(slaves);
                var hookError = this.extensionHook("testRun", runner, sessionClient);

                if (hookError) {
                    this.endSession(sessionClient);
                    return callback(hookError);
                }

                runner.on("suite:end", function (results) {
                    this.endSession(sessionClient);
                    callback(null, results);
                }.bind(this));
            }.bind(this),
            function (error) {
                this.endSession(session);
                // Temporary, ramp provides a Buffer for the message
                error.message = error.message.toString();
                return callback(error);
            }.bind(this));
    },

    startSession: function (client, callback) {
        return function (resourceSet) {
            if (this.aborted) { return callback(); }
            this.logger.info("Creating browser session");

            resourceSet.addResource({
                path: "/buster/configure-test-run.js",
                content: "buster.configureTestRun(" + JSON.stringify({
                    failOnNoAssertions: opt(this.options, "failOnNoAssertions", true),
                    autoRun: opt(this.config.options, "autoRun", true),
                    captureConsole: opt(this.options, "captureConsole", true),
                    filters: opt(this.options, "filters", undefined)
                }) + ");"
            }).then(function () {
                resourceSet.loadPath.append("/buster/configure-test-run.js");

                client.createSession(cacheability(this.cacheable, resourceSet), {
                    staticResourcesPath: !!this.options.staticResourcesPath
                }).then(
                    callback.bind(null, null),
                    sessionError.bind(null, this.options, callback)
                );
            }.bind(this));
        }.bind(this);
    },

    start: function () {
        var client = createRampClient(this.options);
        var self = this;
        var done = function () { return self.done.apply(self, arguments); };
        this.config.resolve().then(this.startSession(client, function (err, sessionInit) {
            if (err) { return done(err); }
            this.onInterrupt(function () { sessionInit.endSession(); });

            sessionInit.onSessionAbort(function (e) {
                done({ message: e.error });
            }.bind(this));

            try {
                if (this.aborted) { return this.endSession(sessionInit); }
                this.options = _.extend({}, this.options, this.config.options);
                this.runTests(sessionInit, done);
            } catch (e) {
                done(e);
            }
        }.bind(this)), configError.bind(null, done));
    },

    onInterrupt: function (callback) {
        process.on("SIGINT", function () {
            callback();
            process.exit(1);
        });
    }
};

module.exports = {
    testRun: testRun,

    run: function (config, options, done) {
        var run = testRun.create(config, options || {}, this.logger, done);
        run.start();
        return run;
    }
};
