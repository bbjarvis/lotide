const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
//console.log("should Pass");

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
//console.log("should Pass");

assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false
//console.log("should Fail");

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
//console.log("should Pass");

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false
//console.log("should Fail");
