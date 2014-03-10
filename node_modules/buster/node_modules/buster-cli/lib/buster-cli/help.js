var color = require("ansi-colorizer");

/* Helper functions originally in buster-terminal.
 * Moved inline here as this was the only place using them.
 */
function repeat(character, times) {
    var str = "";
    while (times--) {
        str += character;
    }
    return str;
}

function reflowLine(length, text) {
    var line = "";
    return text.split(" ").reduce(function (lines, word) {
        if (line.length > 0 && line.length + word.length + 1 > length) {
            lines.push(line);
            line = "";
        }
        line += (!!line ? " " : "") + word;
        return lines;
    }, []).concat([line]).join("\n");
}

function reflow(text, length) {
    return text.split("\n").map(reflowLine.bind(null, length)).join("\n");
}

function alignLeft(string, width) {
    var len = color.charCount(string);
    return string + repeat(" ", width - len);
}

function maxWidth(strings) {
    var i, l, width, str;
    for (i = 0, l = strings.length, width = 0; i < l; i++) {
        str = (strings[i] == null ? "" : String(strings[i]));
        width = Math.max(color.charCount(str), width);
    }
    return width;
}

/* End old buster-terminal helpers */

function helpTopicsFor(opt, helpTopics) {
    if (!helpTopics) { return ""; }
    var topics = Object.keys(helpTopics);
    var help = topics.length === 1 ? topics[0] : "[" + topics.join(",") + "]";
    return " See also " + opt.signature + " " + help + ".";
}

function logHelpTopic(logger, topics, topic) {
    if (topics[topic]) { return logger.log(topics[topic]); }
    var names = Object.keys(topics).join(",");
    logger.error("No such help topic '" + topic + "'. Try without a specific " +
                 "help topic, or one of: " + names + ".");
}

function reflowAndIndent(text) {
    var indDepth = this.sigWidth + this.spacing + this.indent;
    var indentation = repeat(" ", indDepth);
    var width = this.width - indentation.length;
    return reflow(text, width).split("\n").join("\n" + indentation);
}

function optionHelpSummary(option) {
    var topics = helpTopicsFor(option, this.cli.helpTopics);
    return repeat(" ", this.indent) +
        alignLeft(option.signature, this.sigWidth) +
        repeat(" ", this.spacing) +
        reflowAndIndent.call(this, option.description + topics);
}

function Help(cli, options) {
    this.cli = cli;

    for (var prop in options) {
        this[prop] = options[prop];
    }
}

Help.prototype = module.exports = {
    width: 80,
    indent: 4,
    spacing: 3,

    create: function (cli, options) {
        return new Help(cli, options);
    },

    addHelpOption: function (missionStatement, description, topics) {
        this.cli.opt(["-h", "--help"], {
            description: "Show this message.",
            hasValue: true,
            // To allow for --help with no value when we have help topics.
            requiresValue: false
        });
        this.cli.helpTopics = topics;
        this.cli.on("args:parsed", this.helpLogger({
            missionStatement: missionStatement,
            description: description
        }));
    },

    helpLogger: function (options) {
        return function (opt) {
            var logger = this.cli.logger;
            var help = opt["-h"];
            if (!help.isSet || !logger) { return; }
            this.cli.loggedHelp = true;
            if (help.value) {
                return logHelpTopic(logger, this.cli.helpTopics, help.value);
            }
            if (options.missionStatement) {
                logger.log(options.missionStatement + "\n");
            }
            if (options.description) {
                logger.log(options.description + "\n");
            }
            logger.log(this.formatHelp(this.cli.args));
        }.bind(this);
    },

    formatHelp: function (args) {
        var signatures = args.options.map(function (a) { return a.signature; });
        this.sigWidth = maxWidth(signatures);
        return args.options.filter(function (opt) {
            return !!opt.signature;
        }).map(optionHelpSummary.bind(this)).join("\n");
    }
};