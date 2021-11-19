var assert = require('assert');
var expect = require('chai').expect;
var {add,
  divide,
  multiply,
  substract} = require('../src/calculator.js');

describe('#calculator()', function() {
  context('addition', function() {
    it('should return a + b', function() {
      expect(add(5,10)).to.equal(15)
      expect(add(10,10)).to.equal(20)
      expect(add(125,10)).to.equal(135)
      expect(add(1515,1025)).to.equal(2540)
      expect(add('s',5)).not.to.be.a('number')
    })
  })
  context('division', function() {
    it('should return a / b', function() {
      expect(divide(10,5)).to.equal(2)
      expect(divide(10,10)).to.equal(1)
      expect(divide(125,10)).to.equal(12.5)
      expect(divide(5,0)).to.equal(undefined)
    })
  })
  context('multiply', function() {
    it('should return a * b', function() {
      expect(multiply(5,2)).to.equal(10)
      expect(multiply(10,10)).to.equal(100)
      expect(multiply(125,10)).to.equal(1250)
      expect(multiply(1515,1025)).to.equal(1552875)
    })
  })
  context('substract', function() {
    it('should return a - b', function() {
      expect(substract(5,10)).to.equal(-5)
      expect(substract(10,10)).to.equal(0)
      expect(substract(125,10)).to.equal(115)
      expect(substract(1515,1025)).to.equal(490)
    })
  })
});