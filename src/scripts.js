const welcomeBox = document.querySelector('.welcome-box');
const userCard = document.querySelector('.user-card')
const userFixtureData = [
  {
    "id": 1,
    "name": "Luisa Hane",
    "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
    "email": "Diana.Hayes1@hotmail.com",
    "strideLength": 4.3,
    "dailyStepGoal": 10000,
    "friends": [
      16,
      4,
      8
    ]
  },
  {
    "id": 2,
    "name": "Jarvis Considine",
    "address": "30086 Kathryn Port, Ciceroland NE 07273",
    "email": "Dimitri.Bechtelar11@gmail.com",
    "strideLength": 4.5,
    "dailyStepGoal": 5000,
    "friends": [
      9,
      18,
      24,
      19
    ]
  }];
var users = userFixtureData.map(user => {
  return new User(user)
});
userRepository = new UserRepository(users);

window.addEventListener('load', onLoadHandler)

function onLoadHandler() {
  loadUsername()
  loadUsercard()
}

function loadUsercard() {
  userRepository.users.forEach(user => {
    let userInfo = userRepository.users[0];
    userCard.innerHTML = `
      <article class="widget" id="userInfo">
        Name: ${userInfo.name}
        Address: ${userInfo.address}
        Email: ${userInfo.email}
      </article>
      `;
  })

}

function loadUsername() {
  welcomeBox.innerText = `Welcome, ${userRepository.users[0].name}!`
}

function findAllUsernames() {
  return userRepository.users.map(user => {
   return user.name
  })
}

findAllUsernames()

console.log("Hello World");
