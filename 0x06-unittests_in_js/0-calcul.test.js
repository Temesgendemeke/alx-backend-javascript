const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return the sum of rounded numbers', function() {
    assert.strictEqual(calculateNumber(1.4, 4.5), 6);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    assert.strictEqual(calculateNumber(2.8, 2.3), 5);
    assert.strictEqual(calculateNumber(-1.2, 2.3), 1);
    assert.strictEqual(calculateNumber(-1.5, -2.5), -3);
  });

  it('should handle edge cases', function() {
    assert.strictEqual(calculateNumber(0, 0), 0);
    assert.strictEqual(calculateNumber(1.4999999, 1.4999999), 2);
    assert.strictEqual(calculateNumber(-1.4999999, -1.4999999), -2);
    assert.strictEqual(calculateNumber(0.1, 0.1), 0);
  });
});