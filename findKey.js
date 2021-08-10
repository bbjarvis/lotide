/*  function takes in an object and a callback. 
    scans the object and returns the first key
    for which the callback returns a truthy value.
    If no key is found, then it should return undefinde
*/
const findKey = (object, callback) => {
  for (const key in object) {
    console.log(object[key].stars)
    if (callback(object[key])) {
      return key;
    }
  }
}
const findKeyByValue = (object1, value) => {
 
  for (const iterator in object1) {
    if (object1[iterator] === value) {
      return iterator;
    }
  }
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

results1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

assertEqual(results1, 'noma');
