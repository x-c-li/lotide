const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😊️😊️😊️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙄️🙄️🙄️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//put in object & callback function, get truthy if callback works, undefined if not
const findKey = function(thing, callback) {
  for (const key in thing) {
    if (callback(thing[key])) {
      return key;
    }
  }
  return;
};

/*
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"
*/

test1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

test2 = {
  "Jonah Hill": { word: "fartbubbles" },
  "Fart":       { word: "snortlaugh" },
  "Burp":       { word: "pikachu" },
  "Channing":   { word: "longword" },
  "Tatum":      { word: "short" },
  "Drugs":      { word: "yourmom" }
};

test3 = {
  "Jonah Hill": { word: "fartbubbles" },
  "Fart":       { word: "snortlaugh" },
  "Burp":       { word: "pikachu" },
  "Channing":   { word: "longword" },
  "Tatum":      { word: "short" },
  "Drugs":      { word: "yourmom" }
};

assertEqual(findKey(test1, x => x.stars === 2), "noma");
assertEqual(findKey(test2, x => x.word.length === 5), "Tatum");
assertEqual(findKey(test2, x => x.word.length > 23), undefined);