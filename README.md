# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @bbjarvis/lotide`

**Require it:**

`const _ = require('@bbjarvis/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Function takes in an array and returns the first element
* `tail(array)`: function take an array and returns the tail of it
* `middle(array)`: takes array, returns middle element or elements
* `assertArraysEqual(actual, expected)`: Compares 2  arrays using "eqArrays" and return a pass/fail message
* `assertEqual(actual, expected)`: function takes in two args and checkes if they are equal
* `assertObjectEquals(actual, expected)`: compare two arrays and return "true" or "false" if perfect match
* `countLetters(string)`: counts leters in a string
* `countOnly(allItems, itemsToCount)`: Takes an array and an object. Returns an object containing counts of everything that the input object listed
* `eqArrays(arr1, arr2)`: compare two arrays and return "true" or "false" if perfect match
* `eqOjects(bject1, object2)`:  Returns true if both objects have identical keys with identical values. Otherwise you get back a big fat false!
* `findKey(object, callback)`:  function takes in an object and a callback. scans the object and returns the first key for which the callback returns 
                                a truthy value. If no key is found, then it should return undefinde
* `findKeyByValue(object1, value)`: Finds the key in an object that matches given value
* `flatten(array)`: Takes in an array of arrays and flattens into one array
* `letterPositions(string)`:  function that takes in a string and returns all indices of letter positions in the string
* `map(array, callback)`: function that takes in an array and a callback and returns a new array based on the results of the callback on each item in the array
* `takeUntil(array, callback)`: function that takes in an array and callback and returns a slice of the array based on the criteria specified in the callback
* `without(source, itemsToRemove)`: function that takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array