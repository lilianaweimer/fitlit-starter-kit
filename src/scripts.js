const welcomeBox = document.querySelector('.welcome-box');
const userCard = document.querySelector('.user-card')
const userStepGoal = document.querySelector('.user-step-goal')
const userDailyHydration = document.querySelector('.user-daily-hydration');

var users = userData.map(user => {
  return new User(user)
});
userRepository = new UserRepository(userData);

window.addEventListener('load', onLoadHandler)

function onLoadHandler() {
  var user = userData[getRandomIndex(userData)]
  loadUsername(user)
  loadUsercard(user)
  loadStepGoal(user)
  loadHydrationData(user)
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

function loadHydrationData(user) {
  const hydration = new Hydration()
  let userHydration = hydration.calculateOuncesConsumedByDay(date);
  userDailyHydration.innerText = `Water Consumed Today: ${userHydration}oz`
  //use the "last" date for this, make it the default (hardcode for now)
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