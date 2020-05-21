const usersWithData = userData.map(data => new User(data));
const userRepository = new UserRepository(usersWithData);

window.addEventListener('load', onLoadHandler)

function onLoadHandler() {
  const user = userRepository.usersWithData[getRandomIndex(userData)]
  const hydration = new Hydration(hydrationData, user.id);
  const sleep = new Sleep(sleepData, user.id)
  const activity = new Activity(activityData, user)
  loadUsername(user)
  loadUsercard(user)
  loadStepGoal(user)
  loadDailyHydrationData(hydration)
  loadWeeklyHydrationData(hydration)
  loadDailySleepData(sleep)
  loadWeeklySleepData(sleep)
  loadAvgSleepData(sleep)
  sleep.findHighestHoursSlept("2019/07/04")
  loadStepsPerDay("2019/06/15", user.id)
  loadMinsActivePerDay("2019/06/15", user.id)
  loadMilesWalked("2019/06/15", user.id, activity)
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function loadUsercard(user) {
  const userCard = document.querySelector('.user-card')
  let userInfo = user;
  userCard.innerText = `Name: ${userInfo.name}
    Address: ${userInfo.address}
    Email: ${userInfo.email}
  `;
}

function loadStepGoal(user) {
  const userStepGoal = document.querySelector('.user-step-goal')
  let userGoal = user.dailyStepGoal;
  let avgGoal = userRepository.findAvgStepGoal();
  userStepGoal.innerText = `Your Step Goal: ${userGoal}
    Average Step Goal: ${avgGoal}
  `;
}

function loadDailyHydrationData(hydration) {
  const userDailyHydration = document.querySelector('.user-daily-hydration');
  let userHydration = hydration.calculateOuncesConsumedByDay("2019/09/22");
  userDailyHydration.innerText = `Water Consumed Today: ${userHydration}oz`
}

function loadWeeklyHydrationData(hydration) {
  const userWeeklyHydration = document.querySelector('.user-weekly-hydration');
  let userWeekHydration = hydration.calculateWeeklyOuncesConsumed("2019/09/22");
  userWeeklyHydration.innerText = `Water Consumed This Week: ${userWeekHydration}oz`
}

function loadDailySleepData(sleep) {
  const userDailySleep = document.querySelector('.user-daily-sleep');
  let userDailySleepHrs = sleep.calculateDailyHoursSlept("2019/09/22");
  let userDailySleepQuality = sleep.calculateDailySleepQuality("2019/09/22")
  userDailySleep.innerText = `Hours Slept Today: ${userDailySleepHrs}hrs.
  Sleep Quality Today: ${userDailySleepQuality}`
}

function loadWeeklySleepData(sleep) {
  const userWeeklySleep = document.querySelector('.user-weekly-sleep');
  let userWeeklySleepHrs = sleep.calculateWeeklyHoursSlept("2019/09/22");
  let userWeeklySleepQuality = sleep.calculateWeeklySleepQuality("2019/09/22")
  userWeeklySleep.innerText = `Hours Slept This Week: ${Math.floor(userWeeklySleepHrs)}hrs.
  Sleep Quality This Week: ${Math.floor(userWeeklySleepQuality)}`
}

function loadAvgSleepData(sleep) {
  const userAvgSleep = document.querySelector('.user-daily-average-sleep');
  let userAvgSleepHrs = sleep.calculateAvgDailySleep("2019/09/22");
  let userAvgSleepQuality = sleep.calculateAvgDailySleepQuality("2019/09/22")
  userAvgSleep.innerText = `Average Hours Slept Today: ${Math.floor(userAvgSleepHrs)}hrs.
  Sleep Quality Today: ${Math.floor(userAvgSleepQuality)}`
}

function loadUsername(user) {
  const nameHeader = document.querySelector('#name-header');
  const welcomeBox = document.querySelector('.welcome-box');
  let firstName = user.findFirstName();
  welcomeBox.innerText = `Welcome, ${firstName}!`;
  nameHeader.innerText = `${firstName}`;
}

function findAllUsernames() {
  return userRepository.usersWithData.map(user => {
   return user.name
  })
}

findAllUsernames()

function loadStepsPerDay(date, userID) {
  const filteredActivity = activityData.filter(activity => activity.date === date && activity.userID === userID)[0]
  const userDailySteps = document.querySelector('.user-daily-steps')
  userDailySteps.innerText = `You walked ${filteredActivity.numSteps} today!`
}

function loadMinsActivePerDay(date, userID) {
  const filteredMinsActivity = activityData.filter(activity => activity.date === date && activity.userID === userID)[0]
  const userDailyMinsActive = document.querySelector('.user-daily-mins-active')
  userDailyMinsActive.innerText = `You were active for ${filteredMinsActivity.minutesActive} minutes today!`
}

function loadMilesWalked(date, userID, activity) {
  const filteredMilesWalked = activityData.filter(activity => activity.date === date && activity.userID === userID)[0]
  const userDailyMiles = document.querySelector('.user-daily-miles-walked')
  userDailyMiles.innerText = `You walked ${activity.calculateMilesWalked(date).toFixed(2)} miles today!`
}

if (typeof module !== 'undefined') {
  module.exports = userData;
}
