var config = module.exports;

config["Sample browser tests"] = {
  sources: ["src/**/*.js"],
  testHelpers: ["testHelpers/helper.js"],
  tests: ["test/**/*-test.js"],
  environment: "browser"
}