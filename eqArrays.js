const assertEqual = require('./assertEqual');

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

module.exports = eqArrays;
