const assertEqual = require('./assertEqual');
/*  Takes an array and an object.
    Returns an object containing counts of everything that the input object listed
*/
const countOnly = function(allItems, itemsToCount) {
  let results = {};

  for (const item of allItems) {
    for (const key in itemsToCount) {
      if ((key === item) && itemsToCount[key]) {
        results.hasOwnProperty(item) ? results[key] += 1 : results[key] = 1;
      }
    }
  }
  return results;
};
module.exports = countOnly;
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

// console.lot(result1);
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
