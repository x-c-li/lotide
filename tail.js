//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😊️😊️😊️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙄️🙄️🙄️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//TAIL FUNCTION

const tail = function(list) {
  let newArray = [];
  for (let i = 1; i < list.length; i++) {
    newArray.push(list[i]);
  }
  return newArray;
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

//other test cases
const emptyList = [];
tail(emptyList); // no need to capture the return value since we are not checking it
assertEqual(tail(emptyList), 0);

const oneList = [1];
console.log(tail(oneList));
assertEqual(tail(oneList), 0);

