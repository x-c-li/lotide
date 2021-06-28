/*
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let x = 0; x < array1.length; x++) {
    //remember that this is an index, so the lengths are the same 
    //for both arrays, so use the same index to refer to the numbers 
    //in both arrays
    if (array1[x] !== array2[x]) {
      return false;
    } 
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`😊️ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🙄️ Assertion Failed: ${array1} !== ${array2}`);
  }
};
*/
//
//Create a function flatten which will take in an array 
//containing elements including nested arrays of elements, 
//and return a "flattened" version of the array.

const flatten = function(nestedArray) {
  for (let n = 0; n < nestedArray.length; n++) {
    if (Array.isArray(nestedArray[n])) {
      for (let i = 0; i < nestedArray[n].length; i++) {
        nestedArray.splice(n, 1, nestedArray[n][i]);
      }
    }
  }
  return nestedArray
};

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]

module.exports = flatten;
