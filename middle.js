
const middle = function(array) {
  let newArray = [];
  if (array.length <= 2) {
    return newArray;
  } else {
    if (Number.isInteger(array.length / 2)) {
      newArray.push(array[(array.length / 2) - 1], array[(array.length / 2)]);
      return newArray;
    } else {
      newArray.push(array[(Math.ceil(array.length / 2)) - 1]);
      return newArray;
    }
  }
};

module.exports = middle;