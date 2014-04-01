#LightTable InstaBuster

##Buster plugin for Light Table

The goal of this plugin is to make it easy and pleasant to test your JavaScript using a killer combo of [Buster.JS](http://www.busterjs.org)  and [Light Table](http://www.lighttable.com).


##Installing
The plugin can be installed using the LightTable plugin manager (or clone this repo to your plugins folder, make sure you call the folder instabuster!).
You probably will need to reload behaviors for the plugin to work.


##Getting started
* See [Buster.JS overview](http://docs.busterjs.org/en/latest/overview/). *Note*. No buster install needed when using InstaBuster (but you may want it for other things like CI etc).
* The plugin ships with a simple [sample project](https://github.com/busterjs/lt-instabuster/tree/master/sample). Open it in your workspace and try running the tests.
* Check out this [introductory screencast](https://www.youtube.com/watch?v=WKHWazblpbc)


##Features

###Browser Capture
Light Table comes packaged with a Chromium browser. You may capture a new browser manually with the command _Buster: Capture browser_. However you probably won't use it very often, because the test behaviors will automatically capture one for you if one hasn't already been captured.

###Test a single JavaScript test file
To run a single test just open the the file in an editor and invoke the command _Buster: Run tests for current editor_. The plugin will automatically figure out if a particular test is considered a buster test from its buster configuration. The editor will get a buster-live button.
Results are shown inline in the editor when running tests in this mode.

###Live mode
You can toggle live mode for a JavaScript test using the command _Buster: Toggle live mode_. When you save the editor a test run is triggered for that particular buster test file.

###Test all (in project)
The _Buster: Run all tests_ command runs all tests for your selected project. You will need to provide the location of a buster.js file for this to work (see Buster config below).
When running tests in this mode, the test results are currently written to the console.


###Autotest
The _Buster: Toggle autotest_ command will turn the autotest feature on/off. When in autotest mode, a test all run is triggered when you save any file that is considered relevant for Buster based on the buster.js configuration you have provided. A test all run will not be triggered when you save an editor that is in buster live mode.

### Buster config
To run buster tests you need to provide the path to the relevant buster.js file. You can do this through the "Add connection..." command and select Buster. You will be prompted for a file, select the buster.js file for your project. (Limited to one project at the moment).

_If you don't provide a buster.js file, but you are triggering a behavior for running a particular file, the plugin will try to recursivly find one searching the given file's current dir or ancestor dirs._

### Buster dashboard
A dashboard view is available throught the command _Buster: Toggle Dashboard_. The dashboard is shown in the right sidebar of Light Table. Currently the dashboard supports:
* Viewing information about currently selected project (if any)
* Displaying test results from a test run. (Real time updated if you keep the dashboard open when running tests).

The latter is very handy when running all tests for a project. Obviously less important when showing test results inline for an editor.



### CoffeeScript
Testing CoffeScript is a breeze. Thanks to [buster-coffee](https://github.com/busterjs/buster-coffee) you are good to go with a minimum
of effort.

1. Install the buster-coffee module in your project (`npm install buster-coffee` or `npm link buster-coffee` if you wish to install globally).
2. require the module in your projects buster.js config. (see sample below)
3. Write your tests and impl in coffescript or mix and match with javascript...


```javascript
var config = module.exports;

config["Browser tests"] = {
    environment: "browser",
    extensions: [require("buster-coffee")],
    sources: ["src/**/*.coffee"],
    tests: ["test/**/*-test.coffee"]
};


```

Step 1 of the preconditions above might not be needed in a future version of InstaBuster, but you do need it for now.


### Code templates (JavaScript only)
* _Buster: New TestCase_ - Inserts a template for a new test case at current cursor position
* _Buster: New Test_ - Inserts a template for a new test at current cursor position





###Keybindings
None of the commands in the plugin comes with pre-assigned keyboard shortcuts. We don't want to presume anything so we'll leave assigning meaningful shortcuts up to you !

## Key limitations
* Only browsers tests are supported currently
* You may only specify one buster.js through the connect bar. So effetively only one project is supported for running all tests.
* Custom (hand crafted!) bundle of Buster node modules. This means that:
    * The plugin is currently tied to a particular version of buster (0.7.7). Will be able to override this in a future release
    * A few modules are removed due to size (buster-static and phantom support most notably)
    * There just might be some hidden version conflicts due to attempts to compact the dependency tree
* Unless you select a buster config file for your project, the autosearch only searches for "buster.js"


##Version history
Details of changes for each version is provided in the release notes.

* 0.0.5 : CoffeScript testing support
* 0.0.4 : Buster dashboard and improved performance
* 0.0.3 : Reduced footprint and simple autotest feature.
* 0.0.2 : Changed license to same as LightTable (GPL). Some minor fixes.
* 0.0.1 : A very basic initial release for running a single test or all tests for a given project.

##Roadmap
* Support multiple projects
* Call buster test in process, rather than shelling out. This enables a lot of interesting options in the future.
* InstaBusta: Continuosly give (non-annoying) feedback for a Buster test as you edit it.
* Node tests: Allow testing of node enviroment tests.

##License

GPLv3 license, same as [Light Table](https://github.com/LightTable/LightTable). See LICENSE.md for the full text.

