/* compare two arrays and return "true" or "false" if perfect match
 */
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } 
  }
  return true;
};

/*  Compares 2  arrays using "eqArrays" and return a pass/fail
    message
*/
const assertArraysEqual = function(actual, expected) {
  const pass = '✔️✔️✔️ Assertion Passed';
  const fail = '❌❌❌ Assertion Failed';
  eqArrays(actual, expected) ? console.log(`${pass}: ${actual} === ${expected}`) : console.log(`${fail}: ${actual} !== ${expected}`);
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // pass
assertArraysEqual([1, 2, 3], [3, 2, 1]); // fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // pass
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // fail