const eqArrays = require('./eqArrays');

/*  Compares 2  arrays using "eqArrays" and return a pass/fail
    message
*/
const assertArraysEqual = function(actual, expected) {
  const pass = '✔️✔️✔️ Assertion Passed';
  const fail = '❌❌❌ Assertion Failed';
  eqArrays(actual, expected) ? console.log(`${pass}: ${actual} === ${expected}`) : console.log(`${fail}: ${actual} !== ${expected}`);
};

module.exports = assertArraysEqual;