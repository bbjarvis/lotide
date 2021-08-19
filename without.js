const assertArraysEqual = require('./assertArraysEqual');

/*  takes in a "source" array and a "itemsToRemove" array, return a new array
    with only those elements from source that are not in itemsToRemove
*/
const without = function(source, itemsToRemove) {
  let removed = [];
  
  for (let i = 0; i < source.length; i++) {
    let removeItem = 0;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (itemsToRemove[j] === source[i]) {
        removeItem = 1;

      }
    }
    if (!removeItem) {
      removed.push(source[i]);
    }
  }
  return removed;
};

module.exports = without;
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log([2, 3]);
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);