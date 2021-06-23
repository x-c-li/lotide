//countOnly will take in collection of items (strings)
// and return counts for a specific subset of those items 
//will not count everything
//will return an object that represent the stats 

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😊️😊️😊️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙄️🙄️🙄️ Assertion Failed: ${actual} !== ${expected}`);
  }
};


//allItems: an array of strings that we need to look through
//itemsToCount: an object specifying what to count 

const countOnly = function(allItems, itemsToCount) {
  
  let countedItems = {};
  
  for (const item in itemsToCount) {
    let count = 0;
    if (itemsToCount.hasOwnProperty(item)) {
      for (const name of allItems) {
        if (item === name && itemsToCount[item].valueOf() === true) {
          //console.log(name);
          count += 1;
          countedItems[item] = count;
        }
      }
    }
  }
  return countedItems;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1)
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);