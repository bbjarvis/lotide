const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  const pass = '✔️✔️✔️ Assertion Passed';
  const fail = '❌❌❌ Assertion Failed';
  eqArrays(array1, array2) ? console.log(pass) : console.log(fail);
};
/*  function takes in two args and checkes if they are equal, returns message:
    "Assertion Passed: [actual] === [expected]" or
    "Assertion Failed: [actual] !=== [expected]"
    also checks if the arg is string and if so returns the message along with the string
    quotation marks.
*/
const assertEqual = function(actual, expected) {
  const pass = '✔️✔️✔️ Assertion Passed';
  const fail = '❌❌❌ Assertion Failed';
  // added check for string, as the example had quotation marks for strings
  if (actual === expected) {
    if (typeof actual === "string") {
      console.log(`${pass}: "${actual}" === "${expected}"`);
    } else {
      console.log(`${pass}: ${actual} === ${expected}`);
    }
  } else {
    if (typeof actual === "string") {
      console.log(`${fail}: "${actual}" !=== "${expected}"`);
    } else {
      console.log(`${fail}: ${actual} !=== ${expected}`);
    }
  }
};
/*  Takes an array and an object. 
    Returns an object containing counts of everything that the input object listed 
*/
const countOnly = function(allItems, itemsToCount) {
  let results = {};

      for (const item of allItems) {     
        for (const key in itemsToCount) {
          if ((key === item) && itemsToCount[key]) {
            results.hasOwnProperty(item) ? results[key] += 1 : results[key] = 1
          }   
      }    
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
