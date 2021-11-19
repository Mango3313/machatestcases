var expect = require('chai').expect;
var {toUpperCase,longString} = require('../src/functionsops.js');
describe('stringOps', function() {
    context('upper case', function() {
        it('uppercase string', function() {
          expect(toUpperCase("mango")).to.equal("MANGO")
          expect(toUpperCase("M4ngo")).to.equal("M4NGO")
          expect(toUpperCase("MaNgGo")).to.equal("MANGGO")
          expect(toUpperCase("MANGO")).to.equal("MANGO")
          expect(toUpperCase("m a n g o")).to.equal("M A N G O")
          expect(toUpperCase("MM")).to.equal("MM")
        })
      })
      context('upper case', function() {
        it('uppercase string', function() {
          expect(longString("Uno")).to.equal(3)
          expect(longString("Dosy")).to.equal(4)
          expect(longString("Tresee")).to.equal(6)
          expect(longString("Cuatross")).to.equal(8)
          expect(longString("Cinco")).to.equal(5)
          expect(longString("Seis")).to.equal(4)
        })
      })
});