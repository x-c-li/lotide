//check if test cases match with expected outcome
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😊️😊️😊️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙄️🙄️🙄️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//to check if two arrays are the same
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

const eqObjects = function(object1, object2) {

  keysObj1 = Object.keys(object1);
  //console.log(`length of obj 1 keys: ${keysObj1.length}`);
  keysObj2 = Object.keys(object2);
  //console.log(`length of obj 2 keys: ${keysObj2.length}`);

  if (keysObj1.length !== keysObj2.length) {
    return false;
  }

  for (const obKey of keysObj1) {
    //check to see if both arrays 
    if (Array.isArray(object1[obKey]) && Array.isArray(object2[obKey])) {
      if (!eqArrays(object1[obKey], object2[obKey])) {
        return false;
      }
    } else {
      //either both or one are not arrays 
      if (obKey in object2) {
        if (object1[obKey] !== object2[obKey]) {
          return false;
        }
      }
    }
  }

  return true;
};

const assertObjectsEqual = function(actual, expected) {
  //prints out object w key val pairs 
  const inspect = require('util').inspect; 

  if (eqObjects(actual, expected)) {
    console.log(`😊️ Assertion Passed: ${inspect(actual)} === ${inspect(actual)}`);
  } else {
    console.log(`🙄️ Assertion Failed: ${inspect(actual)} !== ${inspect(actual)}`);
  }
};
