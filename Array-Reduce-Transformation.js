// TODO: Make a function that reduces an entire array down to a single value.

/* Expected Results:
  Case(arr, fn(accum + arr[i])) = 10
  Case(arr, fn(accum + arr[i] * arr[i])) = 130
  Case(emptyArr, fn(return 0)) = 25
*/

var reduce = function(nums, fn, init) {
  let res = init;

  // running the function until the loop ends
  for (let i = 0; i < nums.length; i++){
    res = fn(res, nums[i]); // res acts as the accumulator
  }

  return res;
};

nums = [1, 2, 3, 4]

/*

init = 0;
let sum = function(accum, curr) {return accum + curr;}

*/


init = 100;
let sum = function(accum, curr) {return accum + curr * curr;}

reduce(nums, sum, init);

/*

nums = [];
init = 25;
let sum = function(accum, curr) {return 0;}

*/

