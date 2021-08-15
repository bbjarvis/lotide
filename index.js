// index.js
const head                = require('./head');
const tail                = require('./tail');
const middle              = require('./middle');
const assertArraysEqual   = require('./assertArraysEqual');
const assertArrays        = require('./assertArrays');
const assertObjectEquals  = require('./assertObjectEquals');
const countLetters        = require('./countLetters');
const countOnly           = require('./countOnly');
const eqArrays            = require('./eqArrays');
const eqOjects            = require('./eqOjects');
const findKey             = require('./findKey');
const findKeyByValue      = require('./findKeyByValue');
const flatten             = require('./flatten');
const letterPositions     = require('./letterPositions');
const map                 = require('./map');
const takeUntil           = require('./takeUntil');
const without             = require('./without');

module.exports = {
  head,
  tail,
  middle,
  assertArraysEqual,
  assertArrays,
  assertObjectEquals,
  countLetters,
  countOnly,
  eqArrays,
  eqOjects,
  findKey,
  findKeyByValue,
  flatten,
  letterPositions,
  map,
  takeUntil,
  without
};