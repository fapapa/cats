const assert = require('chai').assert;
const breedDetails = require('../syncBreeds');

describe('#breedDetails', () => {
  it('returns breed details for the Bombay breed', () => {
    const bombay = breedDetails('Bombay');
    assert.match(bombay, /^The golden eyes/);
  });
});
