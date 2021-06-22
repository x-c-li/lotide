//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😊️😊️😊️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙄️🙄️🙄️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//TEST MODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Lighthouse", "Lighthouse");
assertEqual(3, 4);

