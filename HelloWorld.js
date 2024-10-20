// TODO: Write a function that returns "Hello World" with args = [[], {}, null, 42]

// var createHelloWorld = function() {...} declares a variable `createHelloWorld`
// and assigns a function without arguments to it.
var createHelloWorld = function(){
  return function(){ 
    return "Hello World"; // returns teh value "Hello World"
  }
};

const f = createHelloWorld(); // calls the function `createHelloWorld` as its value

// calls the function `f`
f();
f([]);
f({}, null, 42);
