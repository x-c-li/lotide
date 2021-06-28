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

//takeUntil which will keep collecting items 
//from a provided array until the callback provided 
//returns a truthy value.
//"slice of the array with elements taken from the beginning"

const takkeUntil = function(array, callback) {
  const output = [];
  for (const a of array) {
    if (!callback(a)) {
      output.push(a);
    } else {
      return output;
    }
  } 
};


//USING ARRAY.FOREACH LOOP
// const takeUntil = function(array, callback) {
//   const output = [];
//   let condition;
//   array.forEach(a => {
//     if (condition === true) {  
//     } else {
//       condition = callback(a);
//       if (!condition) {
//         output.push(a);
//       }
//     }
//   })
//   return output;
// };



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

//console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

assertArraysEqual((takeUntil(data1, x => x < 0)),[ 1, 2, 5, 7, 2 ]);
assertArraysEqual((takeUntil(data2, x => x === ',')), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

/*
EXPECTED OUTPUT
[ 1, 2, 5, 7, 2 ]
---
[ 'I\'ve', 'been', 'to', 'Hollywood' ]
*/

