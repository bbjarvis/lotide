const assert  = require('chai').assert;
const tail  = require('../tail');

describe('#tail', () => {
  it("return 'Lighthouse', 'Labs' for ['Hello', 'Lighthous', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

})
