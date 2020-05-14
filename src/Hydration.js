class Hydration {
  constructor(hydrationInfo) {
    this.userID = hydrationInfo.userID
    this.date = hydrationInfo.date
    this.numOunces = hydrationInfo.numOunces
  }

  calculateAvgFluidsConsumed() {
    // console.log(hydrationData[0])
    // var sum = hydrationData.reduce((sum, currentHydration) => {
    //   if (currentHydration.userID === this.userID) {
    //     sum += currentHydration.numOunces;
    //   }
    //   return sum;
    // }, 0) / hydrationData.length;
    // console.log(sum)
  }

  calculateOuncesConsumedByDay() {

  }

  calculateWeeklyOuncesConsumed() {

  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
