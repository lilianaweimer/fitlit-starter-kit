const hydrationData = require('../data/hydration.js');

class Hydration {
  constructor(hydrationInfo) {
    this.userID = hydrationInfo.userID
    this.date = hydrationInfo.date
    this.numOunces = hydrationInfo.numOunces
  }

  calculateAvgFluidsConsumed() {
    let numOfUserHydrations = 0;
    return hydrationData.reduce((sum, currentHydration) => {
      if (currentHydration.userID === this.userID) {
        sum += currentHydration.numOunces;
        numOfUserHydrations++
      }
      return sum;
    }, 0) / numOfUserHydrations;
  }

  calculateOuncesConsumedByDay(date) {
    const userOunces = hydrationData.filter(currentHydration => {
      return currentHydration.date === date && currentHydration.userID === this.userID
    });

    return userOunces[0].numOunces;
  }

  calculateWeeklyOuncesConsumed(endDate) {
    const userHydrations = hydrationData.filter(currentHydration => currentHydration.userID === this.userID) 
    const endDateHydrationIndex = userHydrations.findIndex(currentHydration => currentHydration.date === endDate);
    let totalWeeklyOunces = 0;
    for (let i = endDateHydrationIndex; i > endDateHydrationIndex - 7; i--) {
      totalWeeklyOunces += userHydrations[i].numOunces;
    }
    return totalWeeklyOunces;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
