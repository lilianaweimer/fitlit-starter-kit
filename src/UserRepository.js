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

  }
}

module.exports = UserRepository;
