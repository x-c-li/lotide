const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😊️😊️😊️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙄️🙄️🙄️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  
  let output = true;

  for (let x = 0; x < array1.length; x++) {
    for (let y = 0; y < array2.length; y++) {
      if (array1[x] === array2[y]) {
        output = output;
        x++
      } else {
        output = false;
      }
    }
  }

  return output;
};





//TEST CASES
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
