/*  function take an array and returns the tail of it
*/
const tail = function(array) {
  return array.slice(1);
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
// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"