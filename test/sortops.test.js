var expect = require('chai').expect;
var {sortArray} = require('../src/functionsops.js');
describe('sortops', function() {
    context('sorting array', function() {
        it('should return an array sorted', function() {
          expect(sortArray([1,5,3,6,4,5])).to.deep.equal([1,3,4,5,5,6])
          expect(sortArray([5,8,62,4,5,2])).to.deep.equal([2, 4, 5, 5, 8, 62])
          expect(sortArray([52,64,87,56])).to.deep.equal([52, 56, 64, 87])
          expect(sortArray([456,154,123,785])).to.deep.equal([123, 154, 456, 785])
          expect(sortArray([1554,17854,5545])).to.deep.equal([1554, 5545, 17854])
          expect(sortArray([125,75,1])).to.deep.equal([1,75,125])
        })
      })
});