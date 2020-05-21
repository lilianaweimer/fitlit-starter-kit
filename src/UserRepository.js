// const User = require('./User');
// console.log(User)

class UserRepository {
  constructor(usersWithData) {
    this.usersWithData = usersWithData
  }

  findUserData(id) {
    return this.usersWithData.find(user => {
      return user.id == id;
    });
  }

  findAvgStepGoal() {
    return this.usersWithData.reduce((acc, user) => {
      acc += user.dailyStepGoal;
      return acc;
    }, 0) / this.usersWithData.length;
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
