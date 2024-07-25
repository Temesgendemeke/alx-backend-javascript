const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
    it('should return the sum of rounded numbers', function() {
        assert.strictEqual(calculateNumber(1.4, 4.5, 'SUM'), 6);
        assert.strictEqual(calculateNumber(1.5, 3.7, 'SUM'), 6);
        assert.strictEqual(calculateNumber(2.8, 2.3, 'SUM'), 5);
        assert.strictEqual(calculateNumber(-1.2, 2.3, 'SUM'), 1);
        assert.strictEqual(calculateNumber(-1.5, -2.5, 'SUM'), -3);
    });
    
    it('should return the difference of rounded numbers', function() {
        assert.strictEqual(calculateNumber(1.4, 4.5, 'SUBTRACT'), -4);
        assert.strictEqual(calculateNumber(1.5, 3.7, 'SUBTRACT'), -2);
        assert.strictEqual(calculateNumber(2.8, 2.3, 'SUBTRACT'), 1);
        assert.strictEqual(calculateNumber(-1.2, 2.3, 'SUBTRACT'), -3);
        assert.strictEqual(calculateNumber(-1.5, -2.5, 'SUBTRACT'), 1);
    });
    
    it('should return the quotient of rounded numbers', function() {
        assert.strictEqual(calculateNumber(1.4, 4.5, 'DIVIDE'), 0.2);
        assert.strictEqual(calculateNumber(1.5, 3.7, 'DIVIDE'), 0.5);
        assert.strictEqual(calculateNumber(2.8, 2.3, 'DIVIDE'), 1.5);
        assert.strictEqual(calculateNumber(-1.2, 2.3, 'DIVIDE'), -0.5);
        assert.strictEqual(calculateNumber(-1.5, -2.5, 'DIVIDE'), 0.5);
    });
    
    it('should handle edge cases', function() {
        assert.strictEqual(calculateNumber(0, 0, 'DIVIDE'), 'Error');
        assert.strictEqual(calculateNumber(1.4999999, 1.4999999, 'DIVIDE'), 1);
        assert.strictEqual(calculateNumber(-1.4999999, -1.4999999, 'DIVIDE'), 1);
        assert.strictEqual(calculateNumber(0.1, 0.1, 'DIVIDE'), 'Error')});
})