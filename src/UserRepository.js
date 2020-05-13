class UserRepository {
  constructor(users) {
    this.users = users
  }

  findUserData(id) {
    return this.users.find(user => {
      return user.id == id
    })
  }

  findAvgStepGoal() {
    return this.users.reduce((acc, user) => {
      acc += user.dailyStepGoal

      return acc;
    }, 0) / this.users.length;
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
