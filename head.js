/*  function takes in two args and checkes if they are equal, returns message:
    "Assertion Passed: [actual] === [expected]" or
    "Assertion Failed: [actual] !=== [expected]"
    also checks if the arg is string and if so returns the message along with the string
    quotation marks.
*/
const assertEqual = function(actual, expected) {
  const pass = '✔️✔️✔️ Assertion Passed';
  const fail = '❌❌❌ Assertion Failed';
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
/*  Function takes in an array and returns the first element
*/
const head = function(array) {
  return array ? array[0] : undefined;
};
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5, 6, 7]), 6);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs");
assertEqual(head([]), 6);