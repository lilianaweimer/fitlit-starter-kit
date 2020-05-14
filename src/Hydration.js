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

  calculateOuncesConsumedByDay() {

  }

  calculateWeeklyOuncesConsumed() {

  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
