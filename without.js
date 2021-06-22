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

const without = function(sourceArray, itemsToRemove) {
  let newArray = [];

  for (let source = 0; source < sourceArray.length; source++) {
    if (sourceArray[source] !== itemsToRemove[source]) {
      newArray.push(sourceArray[source]);
    }
  } 
  return newArray;
};

//TEST SCENARIOS
//console.log(without([1, 2, 3], [1])) // => [2, 3]
//console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);