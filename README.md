#LightTable InstaBuster

##Buster plugin for Light Table

The goal of this plugin is to make it easy and pleasant to test your JavaScript using a killer combo of [Buster.JS](http://www.busterjs.org)  and [Light Table](http://www.lighttable.com).




##Features

###Browser Capture
Light Table comes packaged with a Chromium browser. You may capture a new browser manually with the command _Buster: Capture browser_. However you probably won't use it very often, because the test behaviors will automatically capture one for you if one hasn't already been captured.

###Test a single JavaScript test file
To run a single test just open the the file in an editor and invoke the command _Buster: Run tests for current editor_. The plugin will automatically figure out if a particular test is considered a buster test from its buster configuration. The editor will get a buster-live button.

###Live mode
You can toggle live mode for a JavaScript test using the command _Buster: Toggle live mode_. This watches the editor for changes and triggers a test run for that particular test.

###Test all (in project)
The _Buster: Run all tests_ command runs all tests for your selected project. You will need to provide the location of a buster.js file for this to work (see Buster config below).

###Test results
Currently all test results are just logged to the console.

### Buster config
To run buster tests you need to provide the path to the relevant buster.js file. You can do this through the "Add connection..." command and select Buster. You will be prompted for a file, select the buster.js file for your project. (Limited to one project at the moment).

_If you don't provide a buster.js file, but you are triggering a behavior for running a particular file, the plugin will try to recursivly find one searching the given file's current dir or ancestor dirs._


###Keybindings
None of the commands in the plugin comes with pre-assigned keyboard shortcuts. We don't want to presume anything so we'll leave assigning meaningful shortcuts up to you !

## Key limitations
* Only browsers tests are supported currently
* Custom (hand crafted!) bundle of Buster node modules. This means that:
    * The plugin is currently tied to a particular version of buster (0.7.7). Will be able to override this in a future release
    * A few modules are removed due to size (buster-static and phantom support most notably)
    * There just might be some hidden version conflicts due to attempts to compact the dependency tree
* Unless you select a buster config file for your project, the autosearch only searches for "buster.js"




##Version history
* 0.0.1 : (NOT THERE YET) A very basic initial release for running a single test or all tests for a given project.

##Roadmap
* Call buster test in process, rather than shelling out. This enables a lot of interesting options in the future.
* Inline testresults
* InstaBusta: Continuosly give (non-annoying) feedback for a Buster test as you edit it.
* Autotest: Integrate the autotest feature of Buster to give you continious feedback as you change any test or implementation file as defined by your Buster configuration.
