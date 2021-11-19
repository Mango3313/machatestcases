var expect = require('chai').expect;
var {isPair,isPairArray} = require('../src/functionsops.js');

describe('pairsOps', function() {
    context('isPair', function() {
        it('should return if a number is pair or not', function() {
          expect(isPair(1)).to.equal('No')
          expect(isPair(2)).to.equal('Si')
          expect(isPair(5)).to.equal('No')
          expect(isPair(6)).to.equal('Si')
          expect(isPair(0)).to.equal('No')
          expect(isPair('d')).to.equal('No')
        })
      })
      context('isPair array', function() {
        it('should return if every element of an array is pair or not', function() {
          expect(isPairArray([1,2,5,8,7])).to.equal(false)
          expect(isPairArray([2,2,4,8,10])).to.equal(true)
          expect(isPairArray([1,2,5,8,7])).to.equal(false)
          expect(isPairArray([1,2,6,8,7])).to.equal(false)
          expect(isPairArray([10,2,4,8,7])).to.equal(false)
          expect(isPairArray([1,'w',5,8,7])).to.be.a('boolean')
        })
      })
});