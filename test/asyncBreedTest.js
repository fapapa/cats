const assert = require('chai').assert;
const breedDetailsFromFile = require('../asnycBreeds.js');

describe('#breedDetailsFromFile', () => {
  it('provides, via callback, breed details for the Bombay breed', (done) => {
    breedDetailsFromFile('Bombay', (data) => {
      assert.match(data, /^Cat breeders are/);
      done();
    });
  });
});
