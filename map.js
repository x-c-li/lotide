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
  return true;k
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`😊️ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🙄️ Assertion Failed: ${array1} !== ${array2}`);
  }
};


// The map function will return a new array based on the results of the callback function.
const map = function(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item))
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];
const thing1 = ["ground-esque", "control-esque", "to-esque", "major-esque", "tom-esque"];
const thing2 = ["g", "c", "t", "m", "t"];
const thing3 = [6, 7, 2, 5, 3];

assertArraysEqual((map(words, word => word[0])), thing2);
assertArraysEqual((map(words, word => word + "-esque")), thing1);
assertArraysEqual((map(words, word => word.length)), thing3);


