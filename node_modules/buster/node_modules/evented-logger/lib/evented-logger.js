((typeof define === "function" && define.amd && function (m) {
    define("evented-logger", ["lodash", "bane"], m);
}) || (typeof module === "object" &&
       typeof require === "function" && function (m) {
        module.exports = m(require("lodash"), require("bane"));
    }) || function (m) { this.eventedLogger = m(this._, this.bane); }
)(function (_, bane) {
    "use strict";

    function formatMessage(logger, message) {
        if (!logger.logFunctions && typeof message === "function") {
            return logger.format(message());
        }
        return logger.format(message);
    }

    function createLogger(name, level) {
        return function () {
            if (level > _.indexOf(this.levels, this.level)) { return; }
            var self = this;
            var message = _.reduce(arguments, function (memo, arg) {
                return memo.concat(formatMessage(self, arg));
            }, []).join(" ");
            this.emit("log", { message: message, level: this.levels[level] });
        };
    }

    function Logger(opt) {
        var logger = this;
        logger.levels = opt.levels || ["error", "warn", "log", "debug"];
        logger.level = opt.level || logger.levels[logger.levels.length - 1];

        _.each(logger.levels, function (level, i) {
            logger[level] = createLogger(level, i);
        });

        if (opt.formatter) { logger.format = opt.formatter; }
        logger.logFunctions = !!opt.logFunctions;
    }

    Logger.prototype = bane.createEventEmitter({
        create: function (opt) {
            return new Logger(opt || {});
        },

        format: function (obj) {
            if (typeof obj !== "object") { return String(obj); }

            try {
                return JSON.stringify(obj);
            } catch (e) {
                return String(obj);
            }
        }
    });

    return Logger.prototype;
});
