// TEST/ASSERTION FUNCTIONS
//use assertArrayEqual to test functions like middle 

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


// ACTUAL FUNCTION
const middle = function(array) {
  if (array.length <= 2) {
    return [];
  }

  if (array.length % 2 !== 0) {
    let oddMiddle = [];
    oddMiddle.push(array[Math.floor(array.length / 2)]);
    return oddMiddle;
  } else {
    let evenMiddle = [];
    evenMiddle.push(array[(array.length / 2) - 1], array[(array.length / 2)]);
    return evenMiddle;
  }
}



// TEST CODE

//middle([1]) // => []
//middle([1, 2]) // => []
//assertArraysEqual(middle([1]), []);
//assertArraysEqual(middle([1, 2]), []);

// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);


//middle([1, 2, 3, 4]) // => [2, 3]
//middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
//assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
//assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
