// TODO: Make a function that can map transformed arrays. It'll take in two arguments: array and function.
// There will be three functions: pluseone, plusI, and constant.
// plusone will add 1 to each number of the array
// plusI will add the value of [i] to each number of the array.
// constant will return 42 in place of each number of the array.

/* Expected Results:
  Case(plusone) : [2, 3, 4]
  Case(plusI) : [1, 3, 5]
  Case(constant) : [42, 42, 42]
*/

var map = function(arr, fn) { 
  const result = []; // initialize an empty array

  for (let i = 0; i < arr.length; i++){
    // push allows u to add an element into an array
    result.push(fn(arr[i], i)); // basically means for arr[element of this index], do this function
  }
  return result;
};

let arr = [1,2,3]

let plusOne = function(n) {return n + 1; }
let plusI = function(n) {return n + i; }
let constant = function(n) {return 42; }

func = () => map(arr, plusOne);
func2 = () => map(arr, plusI);
func3 = () => map(arr, constant);
