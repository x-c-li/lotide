// Our map function will take in two arguments:

// An array to map
// A callback function
// The map function will return a new array based on the results of the callback function.


const words = ["ground", "control", "to", "major", "tom"];

const map = function() {
  const results = [];
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

