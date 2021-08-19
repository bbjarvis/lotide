const assertEqual = require("./assertEqual");
/*  function takes in an object and a callback. 
    scans the object and returns the first key
    for which the callback returns a truthy value.
    If no key is found, then it should return undefinde
*/
const findKey = (object, callback) => {
  for (const key in object) {
    console.log(object[key].stars)
    if (callback(object[key])) {
      return key;
    }           
    
  }
};

module.exports = findKey;


results1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

assertEqual(results1, 'noma');
