const assertEqual = require('../assertEqual')


//test code
// comparing same string, should pass
assertEqual("Bootcamp", "Bootcamp");

// comparing different strings, should fail
assertEqual("Lighthouse Labs", "Bootcamp");

// comparing same numbers, should pass
assertEqual(1, 1);

// comparing different numbers,should fail
assertEqual(1, 2);