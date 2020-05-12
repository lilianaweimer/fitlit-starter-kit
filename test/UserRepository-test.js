const chai = require('chai');
const expect = chai.expect;
const UserRepository = require('../src/UserRepository')
const User = require('../src/User');
const userData = require('../data/users_fixtures')

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

  it('should be able to find the average step goal', function() {
    expect(userRepository.findAvgStepGoal()).to.equal(7500)
  })
})
