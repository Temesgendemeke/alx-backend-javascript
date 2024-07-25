const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  it('should return the sum of rounded numbers', function () {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
    assert.strictEqual(calculateNumber('SUM', 2.8, 2.3), 5);
    assert.strictEqual(calculateNumber('SUM', -1.2, 2.3), 1);
    assert.strictEqual(calculateNumber('SUM', -1.5, -2.5), -3);
  });

  it('should return the subtract of rounded numbers', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
    assert.strictEqual(calculateNumber('SUBTRACT', 2.8, 2.3), 1);
    assert.strictEqual(calculateNumber('SUBTRACT', -1.2, 2.3), -3);
    assert.strictEqual(calculateNumber('SUBTRACT', -1.5, -2.5), 1);
  });

  it('should return the divide of rounded numbers', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    assert.strictEqual(calculateNumber('DIVIDE', 1.5, 3.7), 0.5);
    assert.strictEqual(calculateNumber('DIVIDE', 2.8, 2.3), 1.5);
    assert.strictEqual(calculateNumber('DIVIDE', -1.2, 2.3), -0.5);
    assert.strictEqual(calculateNumber('DIVIDE', -1.5, -2.5), 0.5);
  });

  it('should handle edge cases', function () {
    assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    assert.strictEqual(calculateNumber('SUM', 1.4999999, 1.4999999), 2);
    assert.strictEqual(calculateNumber('SUM', -1.4999999, -1.4999999), -2);
    assert.strictEqual(calculateNumber('SUM', 0.1, 0.1), 0);
  });
});
