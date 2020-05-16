class Sleep {
  constructor(sleepData, userID) {
    this.sleepData = sleepData
    this.userSleep = this.findSleepByUserID(userID)
  }

  findSleepByUserID(userID) {
    return this.sleepData.filter(sleep => sleep.userID === userID);
  }

  calculateAvgDailySleep() {
    let numOfHoursSlept = 0;
    return this.userSleep.reduce((sum, currentSleep) => {
        sum += currentSleep.hoursSlept;
        numOfHoursSlept++;
      return sum;
    }, 0) / numOfHoursSlept;
  }

  calculateAvgDailySleep() {
    let numOfHoursSlept = 0;
    return this.userSleep.reduce((sum, currentSleep) => {
        sum += currentSleep.hoursSlept;
        numOfHoursSlept++;
      return sum;
    }, 0) / numOfHoursSlept;
  }

  calculateAvgDailySleepQuality() {
    let sleepRating = 0;
    return this.userSleep.reduce((sum, currentSleepQuality) => {
        sum += currentSleepQuality.sleepQuality;
        sleepRating++;
      return sum;
    }, 0) / sleepRating;
  }

  calculateDailyHoursSlept(date) {
    const userSleepHrs = this.userSleep.filter(currentSleep => {
      return currentSleep.date === date;
    });
    return userSleepHrs[0]['hoursSlept'];
  }

  calculateDailySleepQuality(date) {
    const userSleepQuality = this.userSleep.filter(currentSleepQuality => {
      return currentSleepQuality.date === date;
    });
    return userSleepQuality[0]['sleepQuality'];
  }

  calculateWeeklyHoursSlept(endDate) {
    const endDateSleepIndex = this.userSleep.findIndex(currentSleep => currentSleep.date === endDate);
    const weeklySleep = this.userSleep.slice(endDateSleepIndex - 6, endDateSleepIndex + 1);
    return weeklySleep.reduce((acc, sleep) => {
      return acc += sleep.hoursSlept;
    }, 0);
  }

  calculateWeeklySleepQuality(endDate) {
    const endDateSleepQualityIndex = this.userSleep.findIndex(currentSleepQuality => currentSleepQuality.date === endDate);
    const weeklySleepQuality = this.userSleep.slice(endDateSleepQualityIndex - 6, endDateSleepQualityIndex + 1);
    return weeklySleepQuality.reduce((acc, sleep) => {
      return acc += sleep.sleepQuality;
    }, 0);
  }
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
