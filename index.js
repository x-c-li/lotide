const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const without = require('./without');
const swapper = require('./theSwapper');
const takeUntil = require('./takeUntil');
const map = require('./map');
const letterPositions = require('./letterPositions');
const flatten = require('./stretchFlatten');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');


module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  without: without,
  swapper: swapper,
  takeUntil: takeUntil,
  map: map,
  letterPositions: letterPositions,
  flatten: flatten,
  assertArraysEqual: assertArraysEqual, 
  assertEqual: assertEqual,
  assertObjectsEqual:  assertObjectsEqual, 
  countLetters: countLetters, 
  countOnly: countOnly, 
  eqArrays: eqArrays,
  eqObjects: eqObjects, 
  findKey: findKey, 
  findKeyByValue: findKeyByValue,
};