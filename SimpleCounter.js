// TODO : Create a counter function wherein `createCounter()` returns +1 of the initial value of an integer

// Expected Results: Case(10) = [10, 11, 12], Case(-2) = [-2, -1, 0, 1, 2]

var createCounter = function(n){
  return function(){
    // Returns the initial value then increments by 1 everytime the function is called
    return n++;
    /* n += 1 will not work in this case because it directly increments the value of n.
    >> let n = 10; n+=1; <call 3x> : [11, 12, 13]*/
  }
}

// Case(10)
const counter = createCounter(10);
counter(); // result 10
counter(); // result 11
counter(); // result 12

// Case(-2)
const counter2 = createCounter(-2);
counter2(); // result -2
counter2(); // result -1
counter2(); // result 0
counter2(); // result 1
counter2(); // result 2
