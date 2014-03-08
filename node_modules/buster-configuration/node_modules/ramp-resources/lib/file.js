/*
 * grunt
 * http://gruntjs.com/
 *
 * Copyright (c) 2013 "Cowboy" Ben Alman
 * Licensed under the MIT license.
 * https://github.com/gruntjs/grunt/blob/master/LICENSE-MIT
 */

'use strict';


// Nodejs libs.
var fs = require('fs');
var path = require('path');

// The module to be exported.
var file = module.exports = {};

// External libs.
var glob = require('glob');
var lodash = require("lodash");

// Process specified wildcard glob patterns or filenames against a
// callback, excluding and uniquing files in the result set.
var processPatterns = function (patterns, fn) {
    // Filepaths to return.
    var result = [];
    // Iterate over flattened patterns array.
    lodash.flatten(patterns).forEach(function (pattern) {
        // If the first character is ! it should be omitted
        var exclusion = pattern.indexOf('!') === 0;
        // If the pattern is an exclusion, remove the !
        if (exclusion) { pattern = pattern.slice(1); }
        // Find all matching files for this pattern.
        var matches = fn(pattern);
        if (exclusion) {
            // If an exclusion, remove matching files.
            result = lodash.difference(result, matches);
        } else {
            // Otherwise add matching files.
            result = lodash.union(result, matches);
        }
    });
    return result;
};

// Return an array of all file paths that match the given wildcard patterns.
file.expand = function (options, patterns) {

    // Return empty set if there are no patterns or filepaths.
    if (patterns.length === 0) { return []; }
    // Return all matching filepaths.
    var matches = processPatterns(patterns, function (pattern) {
        // Find all matching files for this pattern.
        return glob.sync(pattern, options);
    });

    if (options.strict && matches.length === 0) {
        throw new Error("'" + patterns + "' matched no files");
    }

    return matches;
};