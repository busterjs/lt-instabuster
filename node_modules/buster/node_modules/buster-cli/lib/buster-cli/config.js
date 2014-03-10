var Path = require("path");
var fs = require("fs");
var bc = require("buster-configuration");
var Minimatch = require("minimatch").Minimatch;

function prop(name) {
    return function (object) {
        return object[name];
    };
}

function nameAndEnv(group) {
    return group.name + " (" + group.environment + ")";
}

function noGroupsError(cli, file, groups, options) {
    // groupFilter() => RegExp|null, if not null use the original string
    var groupFilter = cli.groupFilter(options) && options["-g"].value;
    var envFilter = cli.environmentFilter(options);
    var message = file + " contains no configuration groups";
    var mapper;

    if (envFilter) {
        mapper = prop("environment");
        message += " for environment '" + envFilter + "'";
    }
    if (groupFilter) {
        mapper = prop("name");
        message += " that matches '" + groupFilter + "'";
    }
    if (envFilter && groupFilter) { mapper = nameAndEnv; }
    if (envFilter || groupFilter) {
        message += "\nTry one of:\n  " + groups.map(mapper).join("\n  ");
    }

    return new Error(message);
}

/**
 * Checks for groups without an environment set.
 * If such a group is found and it is not extended by at least one other group,
 * a warning is logged to inform the user, that the group will be ignored.
 * 
 * @param {Object[]} groups Groups to check.
 */
function checkForEnvSet(groups) {

    var i, j, extended;
    for (i = 0; i < groups.length; i++) {

        if (!groups[i].environment) {

            extended = false;
            for (j = 0; j < groups.length && !extended; j++) {
                if (i !== j && groups[j].config["extends"] === groups[i].name) {
                    extended = true;
                }
            }

            if (!extended) {
                this.cli.logger.warn("Warning: " +
                    "no environment set for group \"" +
                    groups[i].name +
                    "\", group will be ignored!");
            }
        }
    }
}

function filterTests(filters, config) {
    var matchers = filters.map(function (filter) {
        return new Minimatch(filter);
    });
    if (matchers.length === 0) { return; }
    config.on("load:tests", function (rs) {
        rs.filter(function (resource) {
            var file = Path.join(rs.rootPath, resource.path);
            return matchers.every(function (m) { return !m.match(file); });
        }).forEach(function (resource) { rs.remove(resource.path); });
    });
}

function emptyFiles(config) {
    return config.sources.reduce(function (files, source) {
        if (config.groups.map(prop("source")).indexOf(source) < 0) {
            files.push(source);
        }
        return files;
    }, []);
}

function Config(cli, options) {
    options = options || {};
    this.baseName = options.baseName;
    this.cli = cli;
    if (options.defaultLocations) {
        cli.defaultLocations = options.defaultLocations;
    }
    cli.opt(["-c", "--config"], {
        description: "Test configuration file",
        hasValue: true
    });
}

module.exports = Config.prototype = {
    create: function (cli, options) {
        return new Config(cli, options);
    },

    addGroupOption: function () {
        this.cli.opt(["-g", "--config-group"], {
            description: "Test configuration group(s) to load",
            hasValue: true
        });
    },

    addTestsOption: function () {
        this.cli.opt(["-t", "--tests"], {
            description: "Test files (within active configuration) to run",
            hasValue: true
        });
    },

    addEnvOption: function () {
        this.cli.opt(["-e", "--environment"], {
            description: "Test configuration environment to load",
            hasValue: true
        });
    },

    groupFilter: function (options) {
        var filter = options["-g"] && options["-g"].value;
        return (filter && new RegExp(filter, "i")) || null;
    },

    environmentFilter: function (options) {
        return options["-e"] && options["-e"].value;
    },

    testFilters: function (options) {
        if (!options["-t"] || !options["-t"].value) { return []; }
        return options["-t"].value.split(",").map(function (path) {
            return Path.resolve(process.cwd(), path);
        });
    },

    filter: function (config, options) {
        config.filterEnv(this.environmentFilter(options));
        config.filterGroup(this.groupFilter(options));
        filterTests(this.testFilters(options), config);
        return config;
    },

    loadConfig: function (options, callback) {
        bc.createConfiguration().loadFiles(
            (options["-c"].value || "").split(","),
            this.baseName,
            this.defaultLocations,
            function (err, config) {
                if (err) {
                    err.message = options["-c"].signature + ": " + err.message;
                    return callback(err);
                }
                var groups = config.groups.slice();
                checkForEnvSet.call(this, groups);
                this.filter(config, options);
                var files = emptyFiles(config);
                if (files.length > 0) {
                    return callback(noGroupsError(
                        this,
                        files.join(","),
                        groups,
                        options
                    ));
                }
                callback(null, config.groups);
            }.bind(this)
        );
    }
};


// TODO
// this.opt == -c
// this.groupOpt == -g
// this.testsOpt == -t
// this.envOpt == -e
