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

  filterWeeklySleep(endDate, sleepData) {
    var sixDaysMillisecs = 518400000
    let endDay = new Date(endDate)
    return sleepData.filter(sleep => {
      const date = new Date(sleep.date)
      return date.getTime() <= endDay.getTime() && date.getTime() >= endDay.getTime() - sixDaysMillisecs
    });
  }

  calculateWeeklyHoursSlept(endDate) {
    const weeklySleep = this.filterWeeklySleep(endDate, this.userSleep);
    return weeklySleep.reduce((acc, sleep) => {
      return acc += sleep.hoursSlept;
    }, 0);
  }

  calculateWeeklySleepQuality(endDate) {
    const weeklySleepQuality = this.filterWeeklySleep(endDate, this.userSleep);
    return weeklySleepQuality.reduce((acc, sleep) => {
      return acc += sleep.sleepQuality;
    }, 0);
  }

  calculateAllAvgSleepQuality() {
    return this.sleepData.reduce((acc, currentData) => {
      acc += currentData.sleepQuality;
      return acc;
    }, 0) / 5000;
  }

  findUsersWithHighSleepQualityScores(endDate, score) {
    const weeklySleepData = this.filterWeeklySleep(endDate, this.sleepData);
    const weeklyDataByScore = weeklySleepData.filter(currentSleep => {
      return currentSleep.sleepQuality > score;
    })
    const userIDs = weeklyDataByScore.map(currentSleep => {
      return currentSleep.userID;
    })
    return Array.from(new Set(userIDs))
  }

  findHighestHoursSlept(date) {
    const sleepDataForDate = this.sleepData.filter(sleep => sleep.date === date);
    const hoursOfSleep = sleepDataForDate.map(data => data.hoursSlept)
    const sortedHours = hoursOfSleep.sort((a, b) => a - b)
    return sortedHours[49]
    //COME BACK, MAKE THIS MORE DYNAMIC!//
  }
}


if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
