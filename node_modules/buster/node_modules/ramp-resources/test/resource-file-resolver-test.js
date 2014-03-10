var buster = require("buster");
var assert = buster.assert;
var testHelper = require("./test-helper");
var rs = require("../lib/resource-set");
var testee = require("../lib/resource-file-resolver");

buster.testCase("resource file resolver", {

    setUp: function () {
        this.rs = rs.create(testHelper.FIXTURES_ROOT);
    },

    tearDown: testHelper.clearFixtures,

    "resolvePaths": {

        "filters out directories": function (done) {

            testHelper.writeFile("some-tests.js", "");
            testHelper.writeFile("some-more-tests.js", "");
            testHelper.mkdir("dir.js");

            testee.resolvePaths(this.rs, ["*.js"],
                done(function (err, matches) {

                    assert.equals(matches.length, 2);
                    assert.match(matches, "some-tests.js");
                    assert.match(matches, "some-more-tests.js");
                }));
        },

        "excludes specified files": function (done) {

            testHelper.writeFile("some-tests.js", "");
            testHelper.writeFile("some-more-tests.js", "");

            testee.resolvePaths(this.rs, ["some*.js", "!*more*.js"],
                done(function (err, matches) {

                    assert.equals(matches.length, 1);
                    assert.match(matches, "some-tests.js");
                }));
        }
    }
});
