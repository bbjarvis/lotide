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

const assertArrayEqual = function(array1, array2) {
  const pass = '✔️✔️✔️ Assertion Passed';
  const fail = '❌❌❌ Assertion Failed';
  eqArrays(array1, array2) ? console.log(pass) : console.log(fail);
};

assertArrayEqual([1, 2, 3], [1, 2, 3]); // pass
assertArrayEqual([1, 2, 3], [3, 2, 1]); // fail
assertArrayEqual(["1", "2", "3"], ["1", "2", "3"]); // pass
assertArrayEqual(["1", "2", "3"], ["1", "2", 3]); // fail