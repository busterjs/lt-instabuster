((typeof define === "function" && define.amd && function (m) {
    define("stack-filter", m);
}) || (typeof module === "object" && function (m) {
    module.exports = m();
}) || function (m) { this.stackFilter = m(); }
)(function () {
    "use strict";
    var regexpes = {};

    return {
        filters: [],

        configure: function (opt) {
            opt = opt || {};
            var instance = Object.create(this);
            instance.filters = opt.filters || [];
            instance.cwd = opt.cwd;
            return instance;
        },

        /**
         * Return true if the stack trace line matches any filter
         */
        match: function (line) {
            var i, l, filters = this.filters;

            for (i = 0, l = filters.length; i < l; ++i) {
                if (!regexpes[filters[i]]) {
                    // Backslashes must be double-escaped:
                    // new RegExp("\\") is equivalent to /\/ - which is an invalid pattern
                    // new RegExp("\\\\") is equivalent to /\\/ - an escaped backslash
                    // This must be done for Windows paths to work properly
                    regexpes[filters[i]] = new RegExp(filters[i].replace(/\\/g, "\\\\"));
                }

                if (regexpes[filters[i]].test(line)) {
                    return true;
                }
            }

            return false;
        },

        /**
         * Filter a stack trace and optionally trim off the current
         * working directory. Accepts a stack trace as a string, and
         * an optional cwd (also a string). The cwd can also be
         * configured directly on the instance.
         *
         * Returns an array of lines - a pruned stack trace. The
         * result only includes lines that point to a file and a
         * location - the initial error message is stripped off. If a
         * cwd is available, all paths will be stripped of it. Any
         * line matching any filter will not be included in the
         * result.
         */
        filter: function (stack, cwd) {
            var lines = (stack || "").split("\n");
            var i, l, line, stackLines = [], replacer = "./";
            cwd = cwd || this.cwd;

            if (typeof cwd === "string") {
                cwd = cwd.replace(/\/?$/, "/");
            }

            if (cwd instanceof RegExp && !/\/\/$/.test(cwd)) {
                replacer = ".";
            }

            for (i = 0, l = lines.length; i < l; ++i) {
                if (/(\d+)?:\d+\)?$/.test(lines[i])) {
                    if (!this.match(lines[i])) {
                        line = lines[i].replace(/^\s+|\s+$/g, "");

                        if (cwd) {
                            line = line.replace(cwd, replacer);
                        }

                        stackLines.push(line);
                    }
                }
            }

            return stackLines;
        }
    };
});
