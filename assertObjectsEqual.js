
const eqObjects = require('./eqObjects');


//  returns message telling if the assertion has passed and what the object values are
const assertObjectEquals = (actual, expected) => {
  const inspect = require('util').inspect;
  const pass = '✔️✔️✔️ Assertion Passed';
  const fail = '❌❌❌ Assertion Failed';
  //  uses eqObjects to check if-else objects are equal
  if (eqObjects(actual, expected)) {
    //  check if it's a string, as the example shows strings in quotation marks
    if (typeof actual === "string") {
      console.log(`${pass}: "${inspect(actual)}" === "${inspect(expected)}"`);
    } else {
      console.log(`${pass}: ${inspect(actual)} === ${inspect(expected)}`);
    }
  } else {
    //  check if it's a string, as the example shows strings in quotation marks
    if (typeof actual === "string") {
      console.log(`${fail}: "${inspect(actual)}" !== "${inspect(expected)}"`);
    } else {
      console.log(`${fail}: ${inspect(actual)} !== ${inspect(expected)}`);
    }
  }
};
module.exports = assertObjectEquals;