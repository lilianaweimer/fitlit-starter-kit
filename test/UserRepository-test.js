const chai = require('chai');
const expect = chai.expect;
const UserRepository = require('../src/UserRepository')
const User = require('../src/User');
const userData = require('../data/users_fixtures')
// [{
//   "id": 1,
//   "name": "Luisa Hane",
//   "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
//   "email": "Diana.Hayes1@hotmail.com",
//   "strideLength": 4.3,
//   "dailyStepGoal": 10000,
//   "friends": [
//     16,
//     4,
//     8
//   ]
// },
// {
//   "id": 2,
//   "name": "Jarvis Considine",
//   "address": "30086 Kathryn Port, Ciceroland NE 07273",
//   "email": "Dimitri.Bechtelar11@gmail.com",
//   "strideLength": 4.5,
//   "dailyStepGoal": 5000,
//   "friends": [
//     9,
//     18,
//     24,
//     19
//   ]
// }];

describe('UserRepository', function() {
  var userRepository;
  beforeEach(function() {
    users = userData.map(user => {
      return new User(user)
    });
    userRepository = new UserRepository(users);
  });
  it('should be a function', function() {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of User UserRepository', function() {
    expect(userRepository).to.be.an.instanceof(UserRepository);
  });

  it('should be able to find user by id', function() {
    expect(userRepository.findUserData(2).name).to.deep.equal("Jarvis Considine");
  });
})
