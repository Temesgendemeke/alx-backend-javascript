const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('Calculations', function() {
  it('should add two numbers correctly', function() {
    const result = calculateNumber('SUM', 2, 3);
    expect(result).to.equal(5);
  });

  it('should subtract two numbers correctly', function() {
    const result = calculateNumber('SUBTRACT', 5, 3);
    expect(result).to.equal(2);
  });

  it('should divide two numbers correctly', function() {
    const result = calculateNumber('DIVIDE', 6, 3);
    expect(result).to.equal(2);
  });

  it('should throw an error when dividing by zero', function() {
    expect(() => calculateNumber('DIVIDE', 6, 0)).to.equal('Error');
  });
});