var fs = require("fs");
var ejs = require("ejs");
var path = require("path");
var ramp = require("ramp");
var platform = require("platform");
var rr = require("ramp-resources");
var TEMPLATE_ROOT = path.join(__dirname, "../views");

function template(templateRoot, name, locals) {
    var templatePath = path.join(templateRoot, name + ".ejs");
    var templateData = fs.readFileSync(templatePath, "utf-8");
    return ejs.render(templateData, { locals: locals });
}

function header(name, templateRoot, masterOfPuppets) {
    var string = template(templateRoot, "header", { name: name });
    var rs = rr.createResourceSet();
    rs.addResource({ path: "/", content: string });
    return rs;
}

module.exports = {
    create: function (httpServer, options) {
        var server = Object.create(this);
        options = options || {};
        server.templateRoot = options.templateRoot || TEMPLATE_ROOT;
        server.name = options.name;

        server.captureServer = ramp.createServer({
            header: {
                resourceSet: header(server.name, server.templateRoot, server.captureServer),
                height: 80
            },
            logger: options.logger
        });

        if (httpServer) { server.captureServer.attach(httpServer); }
        return server;
    },

    respond: function (req, res) {
        if (this.serveTemplate(req, res)) { return true; }
        return false;
    },

    serveTemplate: function (req, res) {
        if (req.url !== "/") { return; }
        res.writeHead(200, { "Content-Type": "text/html" });
        var slaves = this.captureServer.getSlaves().map(function (slave) {
            return platform.parse(slave.userAgent);
        });
        res.end(template(this.templateRoot, "index", {
            slaves: slaves,
            name: this.name
        }));
        return true;
    }
};
