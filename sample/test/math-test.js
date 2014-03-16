
(function() {
  buster.testCase("mathTest", {
    setUp: function() {
      this.math = sample.math;
    },

    "add two numbers": function() {
      assert(this.math.add(2,2), 4);
    },

    "subtract two numbers": function() {
      assert(this.math.subtract(4,2), 2);
    },

    "multiply two numbers": function() {
      assert(this.math.multiply(2,2), 4);
    }


  });


}());
