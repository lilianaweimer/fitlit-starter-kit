const chai = require('chai');
const expect = chai.expect;
const Activity = require('../src/Activity');
const activityData = require('../data/activity')
const fixtureData = require('../data/users_fixtures')

describe('Activity', function() {
  var activityData1;
  beforeEach(function() {
    activityData1 = new Activity(activityData, fixtureData[0])
    activityData2 = new Activity(activityData, fixtureData[1])
  });

  it('should be a function', function() {
    expect(Activity).to.be.a('function')
  });

  it('should be an instance of Activity', function() {
    expect(activityData1).to.be.an.instanceof(Activity)
  });

  it('should have a user ID', function() {
    expect(activityData1.activityData[0]['userID']).to.equal(1)
  });

  it('should be able to have a different user ID', function() {
    expect(activityData2.activityData[1]['userID']).to.equal(2)
  });

  it('should be able to have number of steps', function() {
    expect(activityData1.activityData[0]['numSteps']).to.equal(3577)
  });

  it('should be able to have a different number of steps', function() {
    expect(activityData2.activityData[1]['numSteps']).to.equal(4294)
  });

  it('should have a date', function() {
    expect(activityData1.activityData[0]['date']).to.equal("2019/06/15")
  });

  it('should be able to have the minutes a user is active', function() {
    expect(activityData1.activityData[0]['minutesActive']).to.equal(140)
  });

  it('should be able to have minutes a different user is active', function() {
    expect(activityData2.activityData[1]['minutesActive']).to.equal(138)
  });

  it('should be able to show how many flights of stairs a user climbed', function() {
    expect(activityData1.activityData[0]['flightsOfStairs']).to.equal(16)
  });

  it('should be able to show how many flights of stairs a different user climbed', function() {
    expect(activityData2.activityData[1]['flightsOfStairs']).to.equal(10)
  });

  it('should be able to return the miles a user has walked based on their number of steps', function() {
    const date = "2019/06/15"
    expect(activityData1.calculateMilesWalked(date)).to.equal(2.9130871212121208)
  });

  it('should be able to find how many minutes were they active for a given day', function() {
    const date = "2019/06/15"
    expect(activityData1.findMinsActive(date)).to.equal(140)
  });

  it('should be able to calculate how many minutes active they averaged for a given week', function() {
    const endDate = "2019/06/26"
    expect(activityData1.calculateAvgWeeklyMinsActive(endDate)).to.equal(148.71428571428572)
  });

  it('should be able to determine if the user reached their step goal for a given day', function() {
    const date = "2019/06/15"
    expect(activityData1.hasMetStepGoal(date)).to.equal(false)
  })

  it('should be able to find all the days that the user exceeded their step goal', function() {
    const expectedStartResult = {
      userID: 1,
      date: '2019/06/17',
      numSteps: 14329,
      minutesActive: 168,
      flightsOfStairs: 18
    }
    const expectedEndResult = {
      userID: 1,
      date: '2019/09/20',
      numSteps: 14000,
      minutesActive: 262,
      flightsOfStairs: 17
    }
    expect(activityData1.findAllDaysExceededStepGoal().length).to.equal(33)
    expect(activityData1.findAllDaysExceededStepGoal()[0]).to.deep.equal(expectedStartResult)
    expect(activityData1.findAllDaysExceededStepGoal()[32]).to.deep.equal(expectedEndResult)
  });
});
