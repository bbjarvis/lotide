const assertEqual = require('./assertEqual');

//  function that takes in an object and a value and returns the first key that corresponds to that value
const findKeyByValue = (object1, value) => {
 
  for (const iterator in object1) {
    if (object1[iterator] === value) {
      return iterator;
    }
  }
};
module.exports = findKeyByValue;

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
  
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);