const assertArraysEqual = require('./assertArraysEqual');

/*  This map function will take in two arguments:

    - An array to map
    - A callback function
    The map function will return a new array based on the results of the callback function.
*/

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);

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