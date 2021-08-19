
const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

//  function that takes in a string and returns all indices of letter positions in the string
const letterPositions = string => {
  let countLets = {};
  let x = 0;
  for (const iterator of string) {
    if (iterator.length && iterator.match(/[a-z]/i)) {
      if (countLets.hasOwnProperty(iterator)) {
        countLets[iterator].push(x);
      } else {
        countLets[iterator] = [];
        countLets[iterator].push(x);
      }
        
    }
    x += 1;
  }
  return countLets;
};

module.exports = letterPositions;

const simpstr = "hello";
const simpPosition = {
  h: [0],
  e: [1],
  l: [2, 3],
  o: [4]
};

const lhlStr = "lighthouse in the house";
  
const position = {
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
};

// manual check
console.log(letterPositions(simpstr));
console.log(simpPosition);


// assert check
let returnsimp = letterPositions(simpstr);
for (const key in returnsimp) {
  if (Object.hasOwnProperty.call(returnsimp, key)) {
    assertArraysEqual(returnsimp[key], simpPosition[key]);
        
  }
}

//  manual check
console.log(letterPositions(lhlStr));
console.log(position);

//  assert check
let return1 = letterPositions(lhlStr);
for (const key in return1) {
  if (Object.hasOwnProperty.call(return1, key)) {
    assertArraysEqual(return1[key], position[key]);
        
  }
}