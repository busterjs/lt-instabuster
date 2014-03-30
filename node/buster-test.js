var path = require('path');
var buster_test = require(path.join(__dirname, '../node_modules/buster/node_modules/buster-test-cli'));
var busterPath = path.join(__dirname, "../node_modules", "buster/lib/buster");


var getTestCli = function() {
  return buster_test.create(process.stdout, process.stderr, {
    missionStatement: "Run Buster.JS tests on node, in browsers, or both",
    description: [
        "Usage: buster-test [options] [filters]\n",
        "Optionally provide a test name filter to run a selection of tests:",
        "`buster-test configuration` runs all contexts/tests with the word",
        "'configuration' in their name."
    ].join("\n"),
    environmentVariable: "BUSTER_TEST_OPT",
    runners: buster_test.runners,
    configBaseName: "buster",
    extensions: {
        browser: [
            require(path.join(busterPath, "framework-extension")),
            require(path.join(busterPath, "wiring-extension")),
            require(path.join(__dirname, '../node_modules/buster/node_modules/buster-syntax')).create({ ignoreReferenceErrors: true })
        ]
    }
  });
}

process.setMaxListeners(100);
process.stdout.write("connected!");


process.on('message', function(msg) {
  switch (msg.type) {
    case 'ping':
      process.send("Pong");
      process.send("exit");
      break;
    case 'test':
      var args = ["-c", "" + msg.config, "-r", "instareporter", "-e", "browser"];
      if(msg.path) {
        args.push("-t", msg.path);
      }

      getTestCli().run(args, function(err) {
        /*if(err) {
          process.send("That testrun didn't end well: " + err);
          process.send("exit");
        }*/
      });

      break;
  }

});
