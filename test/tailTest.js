const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns empty list if list is empty", () => {
    assert.deepEqual(tail([]), []);
  });

  it("returns empty list if the list is 1 item long", () => {
    assert.deepEqual(tail([1]), []);
  });

  it("returns 'Lighthouse' and 'Labs' if list is ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
});