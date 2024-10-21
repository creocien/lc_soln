// TODO: Write a counter function wherein there are methods of: incrementing, decrementing, and reseting

/* Expected results
  Case(init = 5) = [6, 5, 4]
  Case(init = 0) = [1, 2, 1, 0, 0]
*/

var createCounter = function(init){
  var currentCount = init; // initializing a var to store the value (kinda like a temp storage)
  return{
    increment: function(){
      return ++currentCount; // increments before returning the actual value
      // if currentCount++ is used, it'll return the value first before incrementing
      // ++value ensures that it returns an already incremented value
    },
    decrement: function(){
      return --currentCount;
    },
    reset: function(){
      return currentCount = init;
    }
  };
};

const counter = createCounter(5);
counter.increment();
counter.reset();
counter.decrement();

const counter2 = createrCounter(0);
counter2.increment();
counter2.increment();
counter2.decrement();
counter2.reset();
counter2.reset();
