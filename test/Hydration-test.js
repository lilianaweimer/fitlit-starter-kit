const chai = require('chai');
const expect = chai.expect;
const Hydration = require('../src/Hydration');
const hydrationData = require('../data/hydration')

describe('Hydration', function() {
  var hydration1, hydration2;
  beforeEach(function() {
    hydration1 = new Hydration(hydrationData, 1)
    hydration2 = new Hydration(hydrationData, 2)
  })

  it('should be a function', function() {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', function() {
    expect(hydration1).to.be.an.instanceof(Hydration);
  });

  it('should have a user ID', function() {
    expect(hydration1.userHydrations[0]['userID']).to.equal(1);
  });

  it('should be able to have a different user ID', function() {
    expect(hydration2.userHydrations[0]['userID']).to.equal(2);
  });

  it('should have a date', function() {
    expect(hydration1.userHydrations[0]['date']).to.equal("2019/06/15");
  });

  it('should be able to have a different date', function() {
    expect(hydration2.userHydrations[0]['date']).to.equal("2019/06/15");
  });

  it('should have a number of ounces', function() {
    expect(hydration1.userHydrations[0]['numOunces']).to.equal(37);
  });

  it('should be able to have a different number of ounces', function() {
    expect(hydration2.userHydrations[0]['numOunces']).to.equal(75);
  });

  describe('Hydration - Methods', function() {
    it('should be able to calculate average fluids consumed', function() {
      expect(hydration1.calculateAvgFluidsConsumed()).to.equal(58.31)
    });

    it('should be able to calculate a different average for fluids consumed', function() {
      expect(hydration2.calculateAvgFluidsConsumed()).to.equal(60.51)
    });

    it('should be able to find the number of ounces consumed for a specific date', function() {
      const date = "2019/06/15";
      expect(hydration1.calculateOuncesConsumedByDay(date)).to.equal(37);
    });

    it('should be able to find the number of ounces consumed on a different date', function() {
      const date = "2019/06/20";
      expect(hydration2.calculateOuncesConsumedByDay(date)).to.equal(71);
    });

    it('should be able to find the number of ounces consumed over seven days', function() {
      const endDate = "2019/06/26";
      expect(hydration1.calculateWeeklyOuncesConsumed(endDate)).to.equal(346);
    });
  });
});
