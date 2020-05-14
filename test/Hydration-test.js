const chai = require('chai');
const expect = chai.expect;
const Hydration = require('../src/Hydration');

describe('Hydration', function() {
  var hydration1, hydration2;
  beforeEach(function() {
    hydration1 = new Hydration(
      {
        "userID": 1,
        "date": "2019/06/15",
        "numOunces": 37
      }
    )
    hydration2 = new Hydration(
      {
        "userID": 2,
        "date": "2019/02/14",
        "numOunces": 75
      }
    )
  })

  it('should be a function', function() {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', function() {
    expect(hydration1).to.be.an.instanceof(Hydration);
  });

  it('should have a user ID', function() {
    expect(hydration1.userID).to.equal(1);
  });

  it('should be able to have a different user ID', function() {
    expect(hydration2.userID).to.equal(2);
  });

  it('should have a date', function() {
    expect(hydration1.date).to.equal("2019/06/15");
  });

  it('should be able to have a different date', function() {
    expect(hydration2.date).to.equal("2019/02/14");
  });

  it('should have a number of ounces', function() {
    expect(hydration1.numOunces).to.equal(37);
  });

  it('should be able to have a different number of ounces', function() {
    expect(hydration2.numOunces).to.equal(75);
  });

  describe('Hydration - Methods', function() {
    it('should be able to calculate average fluids consumed', function() {
      expect(hydration1.calculateAvgFluidsConsumed()).to.equal()
    });
  });
});
