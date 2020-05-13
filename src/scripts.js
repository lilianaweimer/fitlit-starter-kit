const welcomeBox = document.querySelector('.welcome-box');
const userCard = document.querySelector('.user-card')
const userStepGoal = document.querySelector('.user-step-goal')

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
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function loadUsercard(user) {
    let userInfo = user;
    userCard.innerHTML = `
     <article class="widget" id="user-info">
        Name: ${userInfo.name}
        Address: ${userInfo.address}
        Email: ${userInfo.email}
      </article>
    `;
}

function loadStepGoal(user) {
  let userGoal = user.dailyStepGoal;
  let avgGoal = userRepository.findAvgStepGoal();
  userStepGoal.innerHTML = `
    <article class="widget" id="user-step-goal">
      Your Step Goal: ${userGoal}
      Average Step Goal: ${avgGoal}
    </article>
    `;
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

console.log("Hello World");
