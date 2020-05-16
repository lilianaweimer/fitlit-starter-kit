// const hydrationData = require('../data/hydration.js');

class Hydration {
  constructor(userID) {
    this.userHydrations = hydrationData.filter(hydration => hydration.userID === userID);
  }

  calculateAvgFluidsConsumed() {
    let numOfUserHydrations = 0;
    return this.userHydrations.reduce((sum, currentHydration) => {
        sum += currentHydration.numOunces;
        numOfUserHydrations++;   
      return sum;
    }, 0) / numOfUserHydrations;
  }

  calculateOuncesConsumedByDay(date) {
    const userOunces = this.userHydrations.filter(currentHydration => {
      return currentHydration.date === date;
    });
    return userOunces[0]['numOunces'];
  }

  calculateWeeklyOuncesConsumed(endDate) {
    const endDateHydrationIndex = this.userHydrations.findIndex(currentHydration => currentHydration.date === endDate);
    const weeklyHydrations = this.userHydrations.slice(endDateHydrationIndex - 6, endDateHydrationIndex + 1);
    return weeklyHydrations.reduce((acc, hydration) => {
      return acc += hydration.numOunces;
    }, 0);
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
