var path = require('path');
var buster_server = require(path.join(__dirname, '../node_modules/buster/node_modules/buster-server-cli'));

buster_server.create(process.stdout, process.stderr, {
    name: "Buster.<span>JS</span>",
    binary: "buster-server",
    description: "buster-server [options]",
    missionStatement: "Server for automating Buster.JS test runs across browsers",
    unexpectedErrorMessage: "Something went horribly wrong. This is most likely " +
                            "a bug, please report at\n" +
                            "http://github.com/busterjs/buster/issues\n"
}).run(process.argv.slice(2));

