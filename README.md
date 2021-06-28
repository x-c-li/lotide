# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @x_c_li/lotide`

**Require it:**

`const _ = require('@x_c_li/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `without(sourceArray, itemsToRemove)` : returns new array without specified items (itemsToRemove)
* `takeUntil(array, callback)`: keep collecting items from provided array until callback provided returns truthy value
* `tail(list)`: returns everything but the first item in a list
* `head(list)`: only returns the first thing in that list 
* `flatten(nestedArray)`: takes in an array with a nested array of elements and returns a flattened version of the array 
* `middle(array)`: returns the middle value, but for even length array, returns two values for middle 
* `map(array, callback)`: returns a new array based on the results of the callback function
* `letterPositions(sentence)`: return all the indices (zero-based positions) in the string where each character is found.
* `findKeyByValue(objectName, val)`: scans object and return first key which contains given value, if no key w given value is found, return undefined
* `findKey(thing, callback)`: get truthy if callback works, undefined if callback doesn't work
* `eqObjects(object1, object2)`: returns whether the two objects are equal
* `eqArrays(array1, array2)`: returns whether the two arrays are equal 
* `countOnly(allItems, itemsToCount)`:take in collection of items (strings) and return counts for a specific subset of those items --won't count everything, will return an object with the stats  
* `countLetters(sentence)`: returns object with a count of how many times a letter appeared in a string
* `assertObjectsEqual()`: uses eqObjects to log whether two object key value pairs are equal or not 
* `assertEqual(actual, expected)`: console.logs whether two (non-array or object) values are equal or not. Useful for testing. 
* `assertArraysEqual(actual,expected)`: uses eqArrays to see if console.log whether two arrays are equal or not. Useful for testing. 
* `swapper(key1, object1, key2, object2)`: swaps object 1 key 1 into object 2 key 2, and puts object 2 key 2 into object 1 key 1 