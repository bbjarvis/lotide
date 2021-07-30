/*  function takes in two args and checkes if they are equal, returns message:
    "Assertion Passed: [actual] === [expected]" or
    "Assertion Failed: [actual] !=== [expected]"
    also checks if the arg is string and if so returns the message along with the string
    quotation marks.
*/
const assertEqual = function(actual, expected) {
  const pass = '✔️✔️✔️ Assertion Passed';
  const fail = '❌❌❌ Assertion Failed';
  if (actual === expected) {
    if (typeof actual === "string") {
      console.log(`${pass}: "${actual}" === "${expected}"`);
    } else {
      console.log(`${pass}: ${actual} === ${expected}`);
    }
  } else {
    if (typeof actual === "string") {
      console.log(`${fail}: "${actual}" !=== "${expected}"`);
    } else {
      console.log(`${fail}: ${actual} !=== ${expected}`);
    }
  }
};
 /* compare two arrays and return "true" or "false" if perfect match
 */
const eqArrays = function(arr1, arr2) {
  let match = true;
  for (const arr1s of arr1) {
    for (const arr2s of arr2) {
      if (arr2s !== arr1s) {
        math = false;
        break;        
      }
    }
  }
  return match;
};
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
//console.log("should Pass");

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
//console.log("should Pass");

assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false
//console.log("should Fail");

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
//console.log("should Pass");

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false
//console.log("should Fail");