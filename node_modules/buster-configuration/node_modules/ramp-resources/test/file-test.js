var buster = require("buster-node");
var assert = buster.assert;
var refute = buster.refute;
var testHelper = require("./test-helper");
var file = require("../lib/file");

buster.testCase("file", {

    tearDown: testHelper.clearFixtures,

    /**
     * Was a bug caused by old versions of glob.
     * Second call with same patterns, but different directory
     * returned erroneously the files from the first directory.
     */
    "expand same patterns with different cwd": function () {

        var patterns = ["*.js"];
        testHelper.writeFile("/dir1/file1.js", "");
        testHelper.writeFile("/dir1/file2.js", "");
        testHelper.writeFile("/dir2/file3.js", "");
        testHelper.writeFile("/dir2/file4.js", "");

        var files1 = file.expand({
            cwd: testHelper.FIXTURES_ROOT + "/dir1"
        }, patterns);

        patterns = ["*.js"];
        var files2 = file.expand({
            cwd: testHelper.FIXTURES_ROOT + "/dir2"
        }, patterns);

        assert.equals(files1.length, 2);
        assert.equals(files2.length, 2);
        assert.match(files1[0], "file1.js");
        assert.match(files1[1], "file2.js");
        assert.match(files2[0], "file3.js");
        assert.match(files2[1], "file4.js");
    }
});
