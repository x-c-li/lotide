const tail = require('../tail');
const assertEqual = require('../assertEqual');

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
assertEqual(tail(words).length, 2); // original array should still have 3 elements!

//other test cases
const emptyList = [];
// tail(emptyList); // no need to capture the return value since we are not checking it
assertEqual(tail(emptyList), 0);

const oneList = [1];
// console.log(tail(oneList));
assertEqual(tail(oneList), 0);