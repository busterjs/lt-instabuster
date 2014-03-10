var bane = require("bane");
var args = require("./buster-cli/args");
var help = require("./buster-cli/help");
var logger = require("./buster-cli/logger");
var config = require("./buster-cli/config");

function F() {}
function create(obj) {
    F.prototype = obj;
    return new F();
}

function BusterCli(options) {
    var cliArgs = create(args);
    this.args = cliArgs;
    this.opt = cliArgs.opt.bind(cliArgs);
    this.opd = cliArgs.opd.bind(cliArgs);
    this.shorthand = cliArgs.addShorthand.bind(cliArgs);
    this.environmentVariable = options && options.environmentVariable;
    var cliHelp = help.create(this, options || {});
    this.addHelpOption = cliHelp.addHelpOption.bind(cliHelp);
}

// Public API

module.exports = BusterCli.prototype = bane.createEventEmitter({
    validators: args.validators,

    // Create a cli helper. Options:
    // {
    //     // Formatting options
    //     width: 80,  // Total width of any printed help
    //     indent: 4,  // Indent from left edge for printed help
    //     spacing: 3, // Spaces between options and explanations in help
    // }
    //
    create: function (options) {
        return new BusterCli(options);
    },

    environmentArgs: function () {
        var envVar = this.environmentVariable;
        if (!process.env[envVar]) { return []; }
        return process.env[envVar].split(" ");
    },

    parseArgs: function (args, callback) {
        args = this.environmentArgs().concat(args);
        this.args.parse(args, function (errors, options) {
            if (errors) {
                this.logger.error(errors[0]);
            } else {
                this.emit("args:parsed", options);
            }
            callback(errors, options);
        }.bind(this));
    },

    createLogger: function (stdout, stderr) {
        this.logger = logger.createFor(this, stdout, stderr);
        return this.logger;
    },

    addConfigOption: function (baseName, defaultFiles) {
        var cfg = config.create(this, {
            baseName: baseName,
            defaultFiles: defaultFiles
        });
        cfg.addGroupOption();
        cfg.addTestsOption();
        cfg.addEnvOption();
        this.loadConfig = cfg.loadConfig.bind(cfg);
    },

    pref: function (prefs, arg, property) {
        var argValue = arg.value || arg.isSet;
        if (arg.isSet || !prefs) { return argValue; }
        return prefs.get(property, argValue);
    },

    exit: function (code) {
        process.exit(code || 0);
    },

    err: function (message) {
        this.logger.error(message);
        this.exit(1);
    }
});
