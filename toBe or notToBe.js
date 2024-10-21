// TODO: Write a function that returns an object which contains the methods: `toBe()` and `notToBe()`
// wherein the first method should return `true` if the input values are equal and throws an error: "Not Equal" if not.
// And the second method should return `true` if the input values aren't equal and throws an error: "Equal" if not.

/* Expected results: 
  Case(func = () => expect(5).toBe(5)) = {"value":true}
  Case(func = () => expect(5).toBe(null)) = {"error": "Not Equal"}
  Case(func = () => expect(5).notToBe(null)) = {"value": true)
*/

// reads as: `expect(val).method(other)`
var expect = function(val){ // val is for `expect()` arg
  return {
    toBe: function(other){ //other is for `method()` arg
      if (val === other){
        return true; // this returns a value
        } else {
        throw new Error("Not Equal"); // this returns an error instead of a value
      }
    },
    notToBe: function(other){
      if (val !== other){
        return true; 
      } else {
        throw new Error("Equal"); 
      }
    }
  };
};

// Case(func = () => expect(5).toBe(5))
func = () => expect(5).toBe(5); // result: "value": true
// Case(func = () => expect(5).toBe(null))
func2 = () => expect(5).toBe(null); // result: "error" : "Not Equal"
// Case(func = () => expect(5).notToBe(null))
func3 = () => expect(5).notToBe(null); // result: "value" : true


    

