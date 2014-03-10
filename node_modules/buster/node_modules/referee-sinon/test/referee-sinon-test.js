var buster = require("buster-test");
var sinon = require("sinon");
var referee = require("referee");
var formatio = require("formatio");
var assert = referee.assert;
var refute = referee.refute;
var expect = referee.expect;
require("../lib/referee-sinon")(referee, sinon);

var formatter = formatio.configure({ quoteStrings: false });
referee.format = function () {
    return formatter.ascii.apply(formatter, arguments);
};

function requiresFunction(assertion) {
    var args = [32].concat([].slice.call(arguments, 1));

    return function () {
        try {
            assert[assertion].apply(assert, args);
        } catch (e) {
            assert.match(e.message, "32 is not a function");
        }

        try {
            refute[assertion].apply(assert, args);
        } catch (err) {
            assert.match(err.message, "32 is not a function");
        }
    };
}

function requiresSpy(assertion) {
    var args = [function () {}].concat([].slice.call(arguments, 1));

    return function () {
        try {
            assert[assertion].apply(assert, args);
        } catch (e) {
            assert.match(e.message, "is not stubbed");
        }

        try {
            refute[assertion].apply(assert, args);
        } catch (err) {
            assert.match(err.message, "is not stubbed");
        }
    };
}

var testCase = buster.testCase("referee-sinon", {
    "assertions": {
        tearDown: function () {
            if (referee.format.restore) { referee.format.restore(); }
        },

        "formats assert messages through referee": function () {
            sinon.stub(referee, "format").returns("I'm the object");
            var message;
            var spy = sinon.spy();
            spy({ id: 42 });

            try {
                sinon.assert.calledWith(spy, 3);
            } catch (e) {
                message = e.message;
            }

            assert.match(message, "I'm the object");
        },

        "calledWith": {
            "fails when not called with function":
                requiresFunction("calledWith"),
            "fails when not called with spy": requiresSpy("calledWith"),

            "passes when spy is explicitly passed null": function () {
                var spy = sinon.spy();
                spy(null, "Hey");

                refute.calledWith(spy, null, "Hey!");
            },

            "formats message nicely": function () {
                var spy = sinon.spy();
                spy(null, 1, 2);

                try {
                    assert.calledWith(spy, null, 2, 2);
                } catch (e) {
                    var message = "[assert.calledWith] Expected function " +
                            "spy() {} to be called with arguments null, 2, 2" +
                            "\n    spy(null, 1, 2)";
                    assert.equals(e.message, message);
                }
            },

            "doesn't pass undefined to [].slice (IE8 doesn't like that)":
                function () {

                    var spy = sinon.spy();
                    spy('foo');
                    sinon.spy(Array.prototype, "slice");

                    assert.calledWith(spy, 'foo');
                    assert.calledWithExactly(Array.prototype.slice, 1);
                }
        },

        "calledWithExactly": {
            "fails when not called with function":
                requiresFunction("calledWithExactly"),
            "fails when not called with spy": requiresSpy("calledWithExactly"),

            "passes when spy is explicitly passed null": function () {
                var spy = sinon.spy();
                spy(null, "Hey");

                refute.calledWithExactly(spy, null, "Hey!");
            },

            "formats message nicely": function () {
                var spy = sinon.spy();
                spy(null, 1, 2);

                try {
                    assert.calledWithExactly(spy, null, 2, 2);
                } catch (e) {
                    var message = "[assert.calledWithExactly] Expected " +
                            "function spy() {} to be called with exact " +
                            "arguments null, 2, 2\n    spy(null, 1, 2)";
                    assert.equals(e.message, message);
                }
            }
        },

        "calledWithMatch": {
            "fails when not called with function":
                requiresFunction("calledWithMatch"),
            "fails when not called with spy": requiresSpy("calledWithMatch"),

            "passes when spy is passed matching object": function () {
                var spy = sinon.spy();
                spy({ check: 123 });

                refute.calledWithMatch(spy, { test : 123 });
            },

            "formats message nicely": function () {
                var spy = sinon.spy();
                spy({ check: 123 });

                try {
                    assert.calledWithMatch(spy, { check : 321 });
                } catch (e) {
                    var message = "[assert.calledWithMatch] Expected " +
                            "function spy() {} to be called with matching " +
                            "arguments { check: 321 }\n    spy({ check: 123 })";
                    assert.equals(e.message, message);
                }
            }
        },

        "alwaysCalledWithMatch": {
            "fails when not called with function":
                requiresFunction("alwaysCalledWithMatch"),
            "fails when not called with spy":
                requiresSpy("alwaysCalledWithMatch"),

            "passes when spy is always passed matching object": function () {
                var spy = sinon.spy();
                spy({ check: 123 });
                spy({ check: 321 });

                refute.alwaysCalledWithMatch(spy, { test : 123 });
            },

            "formats message nicely": function () {
                var spy = sinon.spy();
                spy({ check: 123 });
                spy({ check: 321 });

                try {
                    assert.alwaysCalledWithMatch(spy, { check : 321 });
                } catch (e) {
                    var message = "[assert.alwaysCalledWithMatch] Expected " +
                            "function spy() {} to always be called with " +
                            "matching arguments { check: 321 }\n    spy({ " +
                            "check: 123 })\n    spy({ check: 321 })";
                    assert.equals(e.message, message);
                }
            }
        },

        "calledOnce": {
            "fails when not called with function":
                requiresFunction("calledOnce"),
            "fails when not called with spy": requiresSpy("calledOnce"),

            "passes when called once": function () {
                var spy = sinon.spy();
                spy(null, "Hey");

                assert.calledOnce(spy);
            },

            "formats message nicely": function () {
                try {
                    assert.calledOnce(sinon.spy());
                } catch (e) {
                    var message = "[assert.calledOnce] Expected function " +
                            "spy() {} to be called once but was called 0 times";
                    assert.equals(e.message, message);
                }
            }
        },

        "called": {
            "fails when not called with function": requiresFunction("called"),
            "fails when not called with spy": requiresSpy("called"),

            "passes when called once": function () {
                var spy = sinon.spy();
                spy(null, "Hey");

                assert.called(spy);
            },

            "formats message": function () {
                try {
                    assert.called(sinon.spy());
                } catch (e) {
                    var message = "[assert.called] Expected function spy() " +
                            "{} to be called at least once but was never " +
                            "called";
                    assert.equals(e.message, message);
                }
            }
        },

        "callOrder": {
            "fails when not called with function":
                requiresFunction("callOrder"),
            "fails when not called with spy": requiresSpy("callOrder"),

            "passes when called in order": function () {
                var spies = [sinon.spy(), sinon.spy()];
                spies[0]();
                spies[1]();

                assert.callOrder(spies[0], spies[1]);
            },

            "passes when called in order using an array": function () {
                var spies = [sinon.spy(), sinon.spy()];
                spies[0]();
                spies[1]();

                assert.callOrder(spies);
            },

            "formats message": function () {
                var spies = [sinon.spy(), sinon.spy()];
                spies[1]();
                spies[0]();

                try {
                    assert.callOrder(spies[0], spies[1]);
                } catch (e) {
                    var message = "[assert.callOrder] Expected 0, 1 to be " +
                            "called in order but were called as 1, 0";
                    assert.equals(e.message, message);
                }
            }
        },

        "calledOn": {
            "fails when not called with function":
                requiresFunction("calledOn", {}),
            "fails when not called with spy": requiresSpy("calledOn", {}),

            "passes when called on object": function () {
                var spy = sinon.spy();
                var object = { id: 42 };
                spy.call(object);

                assert.calledOn(spy, object);
            },

            "formats message": function () {
                var spy = sinon.spy();
                var object = { id: 42 };
                spy.call(object);

                try {
                    assert.calledOn(spy, { id: 12 });
                } catch (e) {
                    var message = "[assert.calledOn] Expected function spy() " +
                            "{} to be called with { id: 12 } as this but was " +
                            "called on { id: 42 }";
                    assert.equals(e.message, message);
                }
            }
        },

        "alwaysCalledOn": {
            "fails when not called with function":
                requiresFunction("alwaysCalledOn", {}),
            "fails when not called with spy": requiresSpy("alwaysCalledOn", {}),

            "passes when called on object": function () {
                var spy = sinon.spy();
                var object = { id: 42 };
                spy.call(object);

                assert.alwaysCalledOn(spy, object);
            },

            "formats message": function () {
                var spy = sinon.spy();
                var object = { id: 42 };
                spy.call(object);

                try {
                    assert.alwaysCalledOn(spy, { id: 12 });
                } catch (e) {
                    var message = "[assert.alwaysCalledOn] Expected function " +
                            "spy() {} to always be called with { id: 12 } as " +
                            "this but was called on { id: 42 }";
                    assert.equals(e.message, message);
                }
            }
        },

        "alwaysCalledWith": {
            "fails when not called with function":
                requiresFunction("alwaysCalledWith"),
            "fails when not called with spy": requiresSpy("alwaysCalledWith"),

            "passes when always called with object": function () {
                var spy = sinon.spy();
                spy(42);
                spy(42);

                assert.alwaysCalledWith(spy, 42);
            },

            "formats message": function () {
                var spy = sinon.spy();
                spy(42);

                try {
                    assert.alwaysCalledWith(spy, 12);
                } catch (e) {
                    var message = "[assert.alwaysCalledWith] Expected " +
                            "function spy() {} to always be called with " +
                            "arguments 12\n    spy(42)";
                    assert.equals(e.message, message);
                }
            }
        },

        "alwaysCalledWithExactly": {
            "fails when not called with function":
                requiresFunction("alwaysCalledWithExactly"),
            "fails when not called with spy":
                requiresSpy("alwaysCalledWithExactly"),

            "fails when spy is explicitly passed null": function () {
                var spy = sinon.spy();
                spy(null, "Hey");

                refute.alwaysCalledWithExactly(spy, null, "Hey!");
            },

            "formats message nicely": function () {
                var spy = sinon.spy();
                spy(null, 1, 2);

                try {
                    assert.alwaysCalledWithExactly(spy, null, 2, 2);
                } catch (e) {
                    var message = "[assert.alwaysCalledWithExactly] Expected " +
                            "function spy() {} to always be called with " +
                            "exact arguments null, 2, 2\n    spy(null, 1, 2)";
                    assert.equals(e.message, message);
                }
            }
        },

        "threw": {
            "fails when not called with function": requiresFunction("threw"),
            "fails when not called with spy": requiresSpy("threw"),

            "passes when spy threw": function () {
                var spy = sinon.stub().throws();
                try { spy(); } catch (e) {}
                assert.threw(spy);
            },

            "formats message nicely": function () {
                var spy = sinon.spy();

                try {
                    assert.threw(spy);
                } catch (e) {
                    var message = "[assert.threw] Expected function spy() " +
                            "{} to throw an exception";
                    assert.equals(e.message, message);
                }
            }
        },

        "alwaysThrew": {
            "fails when not called with function":
                requiresFunction("alwaysThrew"),
            "fails when not called with spy": requiresSpy("alwaysThrew"),

            "passes when spy always threw": function () {
                var spy = sinon.stub().throws();
                try { spy(); } catch (e) {}
                assert.alwaysThrew(spy);
            },

            "formats message nicely": function () {
                var spy = sinon.spy();

                try {
                    assert.alwaysThrew(spy);
                } catch (e) {
                    var message = "[assert.alwaysThrew] Expected function " +
                            "spy() {} to always throw an exception";
                    assert.equals(e.message, message);
                }
            }
        },

        "calledOnceWith": {
            "fails when not called with function":
                requiresFunction("calledOnceWith"),
            "fails when not called with spy": requiresSpy("calledOnceWith"),


            "passes when called once with object": function () {
                var spy = sinon.spy();
                spy(42);

                assert.calledOnceWith(spy, 42);
            },

            "fails when not called": function () {
                var spy = sinon.spy();
                refute.calledOnceWith(spy, 42);
            },

            "fails when not called with argument": function () {
                var spy = sinon.spy();
                spy();
                refute.calledOnceWith(spy, 42);
            },

            "fails when called twice": function () {
                var spy = sinon.spy();
                spy(42);
                spy(42);
                refute.calledOnceWith(spy, 42);
            },

            "formats message": function () {
                var spy = sinon.spy();
                spy(42);

                try {
                    assert.calledOnceWith(spy, 12);
                } catch (e) {
                    var message = "[assert.calledOnceWith] Expected function " +
                            "spy() {} to be called once with arguments 12\n" +
                            "    spy(42)";
                    assert.equals(e.message, message);
                }
            }
        }
    },

    "sinon assert failures": {
        "delegates to referee.assert.fail": function () {
            sinon.stub(referee, "fail");

            try {
                assert.calledOnce(sinon.spy());
            } catch (e) {}

            var called = referee.fail.calledOnce;
            referee.fail.restore();

            assert(called);
        }
    },

    "sinon assert pass": {
        "emits pass event through referee.assert": function () {
            var pass = sinon.spy();
            referee.on("pass", pass);

            var spy = sinon.spy();
            spy();
            assert.calledOnce(spy);

            assert(pass.calledOnce);
            assert(pass.calledWith("assert.calledOnce"));
        }
    },

    "sinon mock expectation failures": {
        "delegates to referee.assert.fail": function () {
            sinon.stub(referee, "fail");

            try {
                sinon.mock().never()();
            } catch (e) {}

            var called = referee.fail.calledOnce;
            referee.fail.restore();

            assert(called);
        }
    },

    "sinon mock expectation pass": {
        "emits pass event through referee.assert": function () {
            var pass = sinon.spy();
            referee.on("pass", pass);

            var expectation = sinon.mock().once();
            expectation();
            expectation.verify();

            assert(pass.calledOnce);
            assert.match(pass.args[0][0], "Expectation met");
        }
    }
});

var runner = buster.testRunner.create();
referee.on("pass", runner.assertionPass.bind(runner));
var reporter = buster.reporters.defaultReporter.create({
    color: true,
    bright: true
}).listen(runner);

runner.runSuite([testCase]);