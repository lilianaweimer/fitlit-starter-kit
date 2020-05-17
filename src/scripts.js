const welcomeBox = document.querySelector('.welcome-box');
const userCard = document.querySelector('.user-card')
const userStepGoal = document.querySelector('.user-step-goal')
const userDailyHydration = document.querySelector('.user-daily-hydration');
const userWeeklyHydration = document.querySelector('.user-weekly-hydration');
const userDailySleep = document.querySelector('.user-daily-sleep');
const userWeeklySleep = document.querySelector('.user-weekly-sleep');
const userAvgSleep = document.querySelector('.user-daily-average-sleep');
const nameHeader = document.querySelector('#name-header');

var users = userData.map(user => {
  return new User(user)
});
userRepository = new UserRepository(userData);

window.addEventListener('load', onLoadHandler)

function onLoadHandler() {
  var user = userData[getRandomIndex(userData)]
  const hydration = new Hydration(hydrationData, user.id);
  const sleep = new Sleep(sleepData, user.id)
  loadUsername(user)
  loadUsercard(user)
  loadStepGoal(user)
  loadDailyHydrationData(hydration)
  loadWeeklyHydrationData(hydration)
  loadDailySleepData(sleep)
  loadWeeklySleepData(sleep)
  loadAvgSleepData(sleep)
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function loadUsercard(user) {
    let userInfo = user;
    userCard.innerText = `
      Name: ${userInfo.name}
      Address: ${userInfo.address}
      Email: ${userInfo.email}
    `;
}

function loadStepGoal(user) {
  let userGoal = user.dailyStepGoal;
  let avgGoal = userRepository.findAvgStepGoal();
  userStepGoal.innerText = `
    Your Step Goal: ${userGoal}
    Average Step Goal: ${avgGoal}
  `;
}

function loadDailyHydrationData(hydration) {
  let userHydration = hydration.calculateOuncesConsumedByDay("2019/09/22");
  userDailyHydration.innerText = `Water Consumed Today: ${userHydration}oz`
}

function loadWeeklyHydrationData(hydration) {
  let userWeekHydration = hydration.calculateWeeklyOuncesConsumed("2019/09/22");
  userWeeklyHydration.innerText = `Water Consumed This Week: ${userWeekHydration}oz`
}

function loadDailySleepData(sleep) {
  let userDailySleepHrs = sleep.calculateDailyHoursSlept("2019/09/22");
  let userDailySleepQuality = sleep.calculateDailySleepQuality("2019/09/22")
  userDailySleep.innerText = `Hours Slept Today: ${userDailySleepHrs}hrs.
  Sleep Quality Today: ${userDailySleepQuality}`
}

function loadWeeklySleepData(sleep) {
  let userWeeklySleepHrs = sleep.calculateWeeklyHoursSlept("2019/09/22");
  let userWeeklySleepQuality = sleep.calculateWeeklySleepQuality("2019/09/22")
  userWeeklySleep.innerText = `Hours Slept This Week: ${Math.floor(userWeeklySleepHrs)}hrs.
  Sleep Quality This Week: ${Math.floor(userWeeklySleepQuality)}`
}

function loadAvgSleepData(sleep) {
  let userAvgSleepHrs = sleep.calculateAvgDailySleep("2019/09/22");
  let userAvgSleepQuality = sleep.calculateAvgDailySleepQuality("2019/09/22")
  userAvgSleep.innerText = `Average Hours Slept Today: ${Math.floor(userAvgSleepHrs)}hrs.
  Sleep Quality Today: ${Math.floor(userAvgSleepQuality)}`
}

function loadUsername(user) {
  let firstName = user.name.split(' ')[0];
  //I couldn't figure out how to call our findFirstName here
  //I think we need to figure out why our user method disappeared
  //It seems like we're not really instantiating an instance of user
  //But I'm not sure why
  welcomeBox.innerText = `Welcome, ${firstName}!`;
  nameHeader.innerText = `${firstName}`;
}

function findAllUsernames() {
  return userRepository.users.map(user => {
   return user.name
  })
}

findAllUsernames()
