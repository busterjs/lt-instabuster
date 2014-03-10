(function (eventedLogger, buster) {
    if (typeof module === "object" && typeof require === "function") {
        eventedLogger = require("../lib/evented-logger");
        buster = require("buster");
    }

    buster.testCase("eventedLogger", {
        setUp: function () {
            this.logger = eventedLogger.create();
            this.listener = this.spy();
        },

        "emits log event when logging": function () {
            this.logger.on("log", this.listener);
            this.logger.log("Hey");

            assert(this.listener.calledOnce);
            assert(this.listener.calledWith({ level: "log", message: "Hey" }));
        },

        "emits all arguments to log": function () {
            this.logger.on("log", this.listener);
            this.logger.log("Hey", {}, [2, 3], "There");

            assert(this.listener.calledOnce);

            assert.match(this.listener.args[0][0].message,
                         /^Hey (\{\})|(\[object Object\]) \[?2,3\]? There$/);
        },

        "emits log event when warning": function () {
            this.logger.on("log", this.listener);
            this.logger.warn("Hey");

            assert.calledOnce(this.listener);
            assert.calledWith(this.listener, { level: "warn", message: "Hey" });
        },

        "emits log event when erring": function () {
            this.logger.on("log", this.listener);
            this.logger.error("Hey");

            assert.calledOnce(this.listener);
            assert.calledWith(this.listener, {
                level: "error",
                message: "Hey"
            });
        },

        "emits log event when debugging": function () {
            this.logger.on("log", this.listener);
            this.logger.debug("Hey");

            assert.calledOnce(this.listener);
            assert.calledWith(this.listener, {
                level: "debug",
                message: "Hey"
            });
        },

        "emits only errors when level is error": function () {
            this.logger.level = "error";
            this.logger.on("log", this.listener);
            this.logger.debug("Hey");
            this.logger.log("Hey");
            this.logger.warn("Hey");
            this.logger.error("Hey");

            assert.calledOnce(this.listener);
            assert.equals(this.listener.args[0][0].level, "error");
        },

        "emits errors and warnings when level is warn": function () {
            this.logger.level = "warn";
            this.logger.on("log", this.listener);
            this.logger.debug("Hey");
            this.logger.log("Hey");
            this.logger.warn("Hey");
            this.logger.error("Hey");

            assert.calledTwice(this.listener);
            assert.equals(this.listener.args[0][0].level, "warn");
            assert.equals(this.listener.args[1][0].level, "error");
        },

        "emits log, errors and warnings when level is log": function () {
            this.logger.level = "log";
            this.logger.on("log", this.listener);
            this.logger.debug("Hey");
            this.logger.log("Hey");
            this.logger.warn("Hey");
            this.logger.error("Hey");

            assert.calledThrice(this.listener);
            assert.equals(this.listener.args[0][0].level, "log");
            assert.equals(this.listener.args[1][0].level, "warn");
            assert.equals(this.listener.args[2][0].level, "error");
        },

        "emits everything when level is debug": function () {
            this.logger.level = "debug";
            this.logger.on("log", this.listener);
            this.logger.debug("Hey");
            this.logger.log("Hey");
            this.logger.warn("Hey");
            this.logger.error("Hey");

            assert.equals(this.listener.callCount, 4);
        },

        "formats arguments with eventedLogger.format": function () {
            this.stub(this.logger, "format").returns("#");
            this.logger.on("log", this.listener);
            this.logger.log("Hey", {}, [], 23);

            assert.equals(this.logger.format.callCount, 4);
            assert.equals(this.listener.args[0][0].message, "# # # #");
        },

        "provides formatter as create option": function () {
            var listener = this.spy();
            var formatter = this.stub().returns("#");

            var logger = eventedLogger.create({ formatter: formatter });
            logger.on("log", listener);
            logger.log("Hey", {}, [], 23);

            assert.equals(formatter.callCount, 4);
            assert.equals(listener.args[0][0].message, "# # # #");
        },

        "creates logger with custom default level": function () {
            var listener = this.spy();
            var logger = eventedLogger.create({ level: "error" });

            logger.on("log", listener);
            logger.warn("Hey");

            refute.called(listener);
        },

        "creates logger with custom levels": function () {
            var listener = this.spy();
            var logger = eventedLogger.create({
                levels: ["err", "warn", "info", "debug", "scream"]
            });

            logger.on("log", listener);

            logger.scream("Hey");
            logger.debug("Hey");
            logger.info("Hey");
            logger.warn("Hey");
            logger.err("Hey");

            refute.defined(listener.log);
            assert.equals(listener.callCount, 5);
            assert.equals(listener.args[0][0].level, "scream");
            assert.equals(listener.args[1][0].level, "debug");
            assert.equals(listener.args[2][0].level, "info");
            assert.equals(listener.args[3][0].level, "warn");
            assert.equals(listener.args[4][0].level, "err");
        },

        "logs return value from function": function () {
            this.logger.on("log", this.listener);
            this.logger.log(function () {
                return "Hey";
            });

            assert.calledOnce(this.listener);
            assert.calledWith(this.listener, { level: "log", message: "Hey" });
        },

        "does not call logged function if level is silenced": function () {
            var logged = this.spy();
            this.logger.level = "error";
            this.logger.debug(logged);

            refute.called(logged);
        },

        "logs function if instructed to": function () {
            var logger = eventedLogger.create({ logFunctions: true });
            logger.on("log", this.listener);
            logger.log(function () { return "Hey"; });

            assert.calledOnce(this.listener);
            var envelope = this.listener.args[0][0];
            assert.equals(envelope.level, "log");
            assert.match(envelope.message, "function () {");
            assert.match(envelope.message, "return \"Hey\";");
        },

        "does not leak events between instances": function () {
            var listener = this.spy();
            var logger = eventedLogger.create();
            var logger2 = eventedLogger.create();
            logger.on("log", listener);
            logger2.on("log", listener);

            logger.debug("Hmm");

            assert.calledOnce(listener);
        }
    });
}(this.eventedLogger, this.buster));