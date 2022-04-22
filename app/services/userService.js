const User = require("./../models/user");

class userService {
  static create(id, username, name) {
    return new User(id, username, name, "Sin bio");
  }

  static getInfo(User) {
    return [User.id, User.username, User.name, User.bio];
  }

  static updateUserName(User, newUsername) {
    User.setUsername(newUsername);
  }

  static getAllUsernames(listOfUsers) {
    const usernames = listOfUsers.map((User) => {
      return User.getUsername()
    })
    return usernames
  }
}

module.exports = userService;
