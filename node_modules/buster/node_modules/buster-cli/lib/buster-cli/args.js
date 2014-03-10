var bane = require("bane");
var args = require("posix-argv-parser");
var v = args.validators;

function getDescription(options) {
    var description = options.description;
    if (options.values) {
        description += " One of " + options.values.join(", ") + ".";
    }
    if (options.defaultValue) {
        description += " Default is " + options.defaultValue + ".";
    }
    return description;
}

function getValidators(options) {
    var validator, msg, validators = options.validators || [];
    if (options.values) {
        validators.push(v.inEnum(options.values));
        delete options.values;
    }
    if (options.maxTimes) {
        validators.push(v.maxTimesSet(options.maxTimes));
        delete options.maxTimes;
    }
    return validators;
}

function Args() {}
Args.prototype = args;

module.exports = bane.createEventEmitter(new Args());

module.exports.validators= args.validators;

module.exports.opt = function (flags, options) {
    options.description = getDescription(options);
    options.hasValue = !!options.values || !!options.hasValue;
    options.validators = getValidators(options);
    return this.createOption(flags, options);
};

module.exports.opd = function (signature, options) {
    return this.createOperand(signature, options);
};
