//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😊️😊️😊️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙄️🙄️🙄️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let output = {};
  let noSpaces = ""; 

  for (const s of sentence) {
    if (s !== " ") {
      noSpaces += s;
    }
  } 

  for (const letter of noSpaces) {
    if (output[letter]) {
      output[letter] += 1;
    } else {
      output[letter] = 1;
    }
  }

  return output;
}

//TEST CODE
//similar to countOnly
console.log(countLetters('LHL'))
//L 2 and H 1 
console.log(countLetters('lighthouse in the house'))
console.log(countLetters("hello"));

module.exports = countLetters;
