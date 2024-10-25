// TODO: Make a function that can filter out arrays. There should be 3 methods in doing so...
// 1st : greaterThan10 will filter out numbers that are less than 10
// 2nd : firstIndex will return the 1st element of the array
// 3rd : plusOne will add 1 to each value
// NOTE: falsey values must be filtered out

/* Expected Results:
  Case(n>10) = [20, 30]
  Case(1st index) = [1]
  Case(+1) = [-2, 0, 1, 2]
*/

var filter = function(arr, fn){
  const result = [];

  for(let i = 0; i < arr.length; i++){
    if (fn(arr[i], i)){
      result.push(arr[i]);
    }
  }
  return result;
};

let greaterThan10 = function(n){return n > 10;}
let firstIndex = function(n){return i === 0;}
let plusOne = function(n){return n + 1;}

let arr = [0,10,20,30];
let arr2 = [1,2,3];
let arr3 = [-2,-1,0,1,2];



func = () => filter(arr, greaterThan);
func2 = () => filter(arr2, firstIndex);
func3 = () => filter(arr3, plusOne);

