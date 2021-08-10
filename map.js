/*  This map function will take in two arguments:

    - An array to map
    - A callback function
    The map function will return a new array based on the results of the callback function.
*/

const map = function(array, callback) {
  // empty for now :)
  const results = [];
  for (let item of array) {
    results.push(callback(item));
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

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
// console.log(results1);
const myName = ['Brett'];
const results2 = map(myName, word => word[0]);
console.log(results2);
const numbers = [1, 2, 3];
const results3 = map(numbers, word => word[0]);
console.log(results3);
// pass
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
// pass
assertArraysEqual(results2, ['B']);
// fail
assertArraysEqual(results3, [1, 2, 3]);