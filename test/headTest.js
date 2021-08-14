const head = require('../head');
const assertEqual = require('../assertEqual')

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5, 6, 7]), 6);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs");
assertEqual(head([]), 6);
