//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😊️😊️😊️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙄️🙄️🙄️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//TEST MODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);
//assertEqual("Lighthouse", "Lighthouse");
//assertEqual(3, 4);

//HEAD FUNCTION
const head = function(list) { 
  return list[0];
};


//TEST MODE FOR HEAD FUNCTION
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");