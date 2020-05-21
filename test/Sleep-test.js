const chai = require('chai');
const expect = chai.expect;
const Sleep = require('../src/Sleep');
const sleepData = require('../data/sleep')

describe('Sleep', function() {
  var sleepData1;
  beforeEach(function() {
    sleepData1 = new Sleep(sleepData, 1)
    sleepData2 = new Sleep(sleepData, 2)
  })

  it('should be a function', function() {
    expect(Sleep).to.be.a('function');
  })

  it('should be an instance of Sleep', function() {
    expect(sleepData1).to.be.an.instanceof(Sleep);
  });

  it('should have a user ID', function() {
    expect(sleepData1.userSleep[0]['userID']).to.equal(1);
  });

  it('should be able to have a different user ID', function() {
    expect(sleepData2.userSleep[0]['userID']).to.equal(2);
  });

  it('should have a date', function() {
    expect(sleepData1.userSleep[0]['date']).to.equal("2019/06/15");
  });

  it('should be able to have a different date', function() {
    expect(sleepData2.userSleep[0]['date']).to.equal("2019/06/15");
  });

  it('should be able to find the average number of hours slept per day', function() {
    expect(sleepData1.calculateAvgDailySleep()).to.equal(7.660999999999999)
  });

  it('should be able to calculate a different average number of hours slept per day', function() {
    expect(sleepData2.calculateAvgDailySleep()).to.equal(7.367000000000001)
  });

  it('should be able to find their average sleep quality per day over all time', function() {
    expect(sleepData1.calculateAvgDailySleepQuality()).to.equal(2.968)
  });

  it('should be able to find a different average sleep quality per day over all time', function() {
    expect(sleepData2.calculateAvgDailySleepQuality()).to.equal(2.998)
  });

  it('should be able to find how many hours they slept for a specific day', function() {
    const date = "2019/06/15";
    expect(sleepData1.calculateDailyHoursSlept(date)).to.equal(6.1);
  });

  it('should be able to find how many hours a different user slept for a specific day', function() {
    const date = "2019/06/15";
    expect(sleepData2.calculateDailyHoursSlept(date)).to.equal(7);
  });

  it('should be able to find how many hours a different user slept for a different day', function() {
    const date = "2019/06/20";
    expect(sleepData2.calculateDailyHoursSlept(date)).to.equal(10.1);
  });

  it('should be able to find their sleep quality for a specific day', function() {
    const date = "2019/06/15";
    expect(sleepData1.calculateDailySleepQuality(date)).to.equal(2.2);
  });

  it('should be able to find a different users sleep quality for a specific day', function() {
    const date = "2019/06/15";
    expect(sleepData2.calculateDailySleepQuality(date)).to.equal(4.7);
  });

  it('should be able to find a users sleep quality for a different day', function() {
    const date = "2019/06/20";
    expect(sleepData2.calculateDailySleepQuality(date)).to.equal(2.4);
  });

  it('should be able to find how many hours slept each day over the course of a given week', function() {
    const endDate = "2019/06/26";
    expect(sleepData1.calculateWeeklyHoursSlept(endDate)).to.equal(52.70000000000001)
  });

  it('should be able to find their sleep quality each day over the course of a given week', function() {
    const endDate = "2019/06/26";
    expect(sleepData1.calculateWeeklySleepQuality(endDate)).to.equal(17.3)
  });

  it('should be able to find the average sleep quality for all users', function() {
    expect(sleepData1.calculateAllAvgSleepQuality()).to.equal(2.9834400000000043)
  });

  it('should be able to find all users who average a sleep quality greater than 3 for a given week', function() {
    const endDate = "2019/06/26"
    expect(sleepData1.findUsersWithHighSleepQualityScores(endDate, 4.9)).to.deep.equal([37, 10, 4])
  });

  it('should be able to find find the users who slept the most number of hours', function() {
    const date = "2019/07/04"
    expect(sleepData1.findHighestHoursSlept(date)).to.equal(10.9)
  });
})
