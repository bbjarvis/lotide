/* compare two arrays and return "true" or "false" if perfect match
 */
const eqArrays = function(arr1, arr2) {

    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr2[i] !== arr1[i]) {
        return false;
      }
    }
    return true;
  };
  
  //	Returns true if both objects have identical keys with identical values.
  //	Otherwise you get back a big fat false!
  const eqObjects = (object1, object2) => {
    if (Object.keys(object1).length !== Object.keys(object2).length) {
      return false;
    }
    for (const key in object1) {
      if (Array.isArray(object1[key])) {
        if (!(eqArrays(object1[key], object2[key]))) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  };

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

  console.log()

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectEquals(ab, ba); // => pass

const abc = { a: "1", b: "2", c: "3" };
assertObjectEquals(ab, abc); // => fail

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectEquals(cd, dc); // => pass

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectEquals(cd, cd2); // => fail
