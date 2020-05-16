const welcomeBox = document.querySelector('.welcome-box');
const userCard = document.querySelector('.user-card')
const userStepGoal = document.querySelector('.user-step-goal')
const userDailyHydration = document.querySelector('.user-daily-hydration');
const userWeeklyHydration = document.querySelector('.user-weekly-hydration');

var users = userData.map(user => {
  return new User(user)
});
userRepository = new UserRepository(userData);

window.addEventListener('load', onLoadHandler)

function onLoadHandler() {
  var user = userData[getRandomIndex(userData)]
  const hydration = new Hydration(hydrationData, user.id);
  loadUsername(user)
  loadUsercard(user)
  loadStepGoal(user)
  loadDailyHydrationData(hydration)
  loadWeeklyHydrationData(hydration)
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

function loadUsername(user) {
  welcomeBox.innerText = `Welcome, ${user.name}!`
}

function findAllUsernames() {
  return userRepository.users.map(user => {
   return user.name
  })
}

findAllUsernames()
