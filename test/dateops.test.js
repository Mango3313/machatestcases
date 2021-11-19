var expect = require('chai').expect;
var {dayOfWeek,actualHr} = require('../src/functionsops.js');

describe('dateOps', function() {
    context('dayOfWeek', function() {
        it('should return a day of the week based on a number', function() {
          expect(dayOfWeek(0)).to.equal('Domingo')
          expect(dayOfWeek(1)).to.equal('Lunes')
          expect(dayOfWeek(2)).to.equal('Martes')
          expect(dayOfWeek(3)).to.equal('Miercoles')
          expect(dayOfWeek(5)).to.equal('Viernes')
          expect(dayOfWeek('domingo')).to.equal('No existe')
        })
      })
      context('actual hour', function() {
        it('should return actual hour', function() {
          expect(actualHr()).to.equal(12)
          expect(actualHr()).not.to.equal('12')
          expect(actualHr()).not.to.equal(13)
          expect(actualHr()).not.to.equal(00)
          expect(actualHr()).not.to.equal(4)
          expect(actualHr()).to.be.a('number')
        })
      })
});