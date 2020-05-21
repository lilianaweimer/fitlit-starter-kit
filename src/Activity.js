class Activity {
  constructor(activityData, userData) {
    this.activityData = activityData
    this.numOfSteps = activityData.numSteps
    this.userID = userData.id
    this.userData = userData
  }

  filterActivitiesByUserID() {
    return this.activityData.filter(activity => activity.userID === this.userID)
  }

  getActivity(date) {
    return this.activityData.filter(activity => {
      return activity.date === date && activity.userID === this.userID
    })[0];
  }

  calculateMilesWalked(date) {
    let latestUserActivity = this.getActivity(date)
    return latestUserActivity.numSteps * this.userData.strideLength / 5280
  }

  findMinsActive(date) {
    return this.getActivity(date).minutesActive
  }

  calculateAvgWeeklyMinsActive(endDate) {
    const filteredUserActivities = this.filterActivitiesByUserID()
    const endDateActivityIndex = filteredUserActivities.findIndex(currentActivity => currentActivity.date === endDate);
    const weeklyActivities = filteredUserActivities.slice(endDateActivityIndex - 6, endDateActivityIndex + 1);
    return weeklyActivities.reduce((acc, activity) => {
      return acc += activity.minutesActive;
    }, 0) / 7;
  }

  hasMetStepGoal(date) {
    const targetActivity = this.getActivity(date)
    return targetActivity.numSteps > this.userData.dailyStepGoal
  }

  findAllDaysExceededStepGoal() {
    const userActivities = this.filterActivitiesByUserID()
    return userActivities.filter(activity => activity.numSteps > this.userData.dailyStepGoal)
  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}
