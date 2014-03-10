require("buster-test").testRunner.onCreate(function (runner) {
    runner.on("suite:end", function (stats) {
        setTimeout(function () {
            process.exit(stats.ok ? 0 : 1);
        }, 100);
    });
});

require("./test/referee-sinon-test.js");
