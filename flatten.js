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

const flatten = function(array) {
  let flatarray = [];
  for (const index of array) {
    if (Array.isArray(index)) {
      for (const iterator of index) {
        flatarray.push(iterator);
      }
    } else {
      flatarray.push(index);
    }
  }
  return flatarray;
};
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]