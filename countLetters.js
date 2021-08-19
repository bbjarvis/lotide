const assertEqual = require('./assertEqual');


//  function that takes in a sentence and returns a count of each of the letters in the sentenc
const countLetters = string => {
  countLets = {};
  for (const iterator of string) {
    if (iterator.length && iterator.match(/[a-z]/i)) {
      if (countLets.hasOwnProperty(iterator)) {
        countLets[iterator] += 1;
      } else {
        countLets[iterator] = 1;
      }

    }
  }
  return countLets;
};

module.exports = countLetters;

// TESTING
const shouldBe = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};
//  test against given object with loop
const countLet = countLetters('lighthouse in the house');
for (const key in countLets) {
  assertEqual(shouldBe[key], countLet[key]);
}
// some other tests, just checking manually
console.log(countLetters("Brett's the best!"));
console.log(countLetters("Johnny's in the basement Mixing up the medicine I'm on the pavement Thinking about the government The man in the trench coat Badge out, laid off Says he's got a bad cough Wants to get it paid off Look out kid It's somethin you did God knows when But your're doing it again You better duck down the alley way Lookin for a new friend A man in a coonskin cap, in the pig pen Want eleven dollar bills, but you only got ten"));