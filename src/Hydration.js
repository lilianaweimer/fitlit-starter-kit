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

//   calculateWeeklyOuncesConsumed(endDate) {
// //     var tomorrow = new Date();
// // tomorrow.setDate(tomorrow.getDate() + 1);
//     const weekEndDate = new Date(endDate);
//     return hydrationData.reduce((totalOunces,currentHydration) => {
//       if (currentHydration.userID === this.userID && currentHydration.date === this.date) {
//         totalOunces += currentHydration.numOunces;
//       }
//       return totalOunces;
//     });
//     this.calculateOuncesConsumedByDay(endDate);
//   }
// }

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
