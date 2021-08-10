/*  this function takes two parameters
    - the array to work with
    - the callback
    the funtion will return a "slice of the array with elements
    taken from the beginning." It should keep going until the
    callback/predicate returns a truthy value.
    To keep things simple, the callback should only be provided
    one value: The item in the array.
*/

const takeUntil = function(array, callback) {
  // ...
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      return results;
    }
    results.push(item);
  }
  return results;
};
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


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual([ 1, 2, 5, 7, 2 ], results1);
assertArraysEqual([ 'I\'ve', 'been', 'to', 'Hollywood' ], results2);