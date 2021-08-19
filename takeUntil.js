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

module.exports = takeUntil;
const assertArraysEqual = require('./assertArraysEqual');

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual([ 1, 2, 5, 7, 2 ], results1);
assertArraysEqual([ 'I\'ve', 'been', 'to', 'Hollywood' ], results2);