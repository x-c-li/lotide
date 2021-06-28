const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [] if given [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns [] if given [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns [2] if given [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [3] if given [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [2, 3] if given [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns [3, 4] if given [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

});
