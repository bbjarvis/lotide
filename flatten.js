//   function that takes in an array that contains elements including nested array of elements and returns a flattened version of the array.
const flatten = function(array) {
  let flatarray = [];
  for (const index of array) {
    if (Array.isArray(index)) {
      for (const iterator of index) {
        flatarray.push(iterator);
      }
    } else {
      flatarray.push(index);
    }
  }
  return flatarray;
};
module.exports = flatten;

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]