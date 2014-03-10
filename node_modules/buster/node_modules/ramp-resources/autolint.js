module.exports = {
    paths: [
        "lib/**/*.js",
        "test/**/*.js"
    ],
    excludes: ["test/fixtures/"],
    linterOptions: {
        node: true,
        plusplus: true,
        vars: true,
        nomen: true,
        forin: true,
        sloppy: true,
        predef: [
            "assert",
            "refute",
            "buster"
        ]
    }
};
