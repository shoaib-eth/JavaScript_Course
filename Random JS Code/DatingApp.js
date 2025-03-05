/**
 * Represents a user in the dating app.
 * @class
 */
class User {
    /**
     * Creates an instance of User.
     * @param {string} name - The name of the user.
     * @param {number} age - The age of the user.
     * @param {string} gender - The gender of the user.
     * @param {string[]} interests - The interests of the user.
     */
    constructor(name, age, gender, interests) {}

    /**
     * Adds a user to the matches list.
     * @param {User} user - The user to be added to matches.
     */
    addMatch(user) {}

    /**
     * Returns the list of matched users.
     * @returns {User[]} The list of matched users.
     */
    viewMatches() {}

    /**
     * Updates the user's details.
     * @param {Object} details - The details to update.
     * @param {string} [details.name] - The new name of the user.
     * @param {number} [details.age] - The new age of the user.
     * @param {string} [details.gender] - The new gender of the user.
     * @param {string[]} [details.interests] - The new interests of the user.
     */
    updateDetails({ name, age, gender, interests }) {}

    /**
     * Sends a message to another user.
     * @param {User} toUser - The user to send the message to.
     * @param {string} message - The message to send.
     */
    sendMessage(toUser, message) {}

    /**
     * Returns the list of received messages.
     * @returns {Object[]} The list of received messages.
     * @returns {string} returns[].from - The name of the sender.
     * @returns {string} returns[].message - The content of the message.
     */
    viewMessages() {}

    /**
     * Blocks a user.
     * @param {User} user - The user to block.
     */
    blockUser(user) {}
}
  constructor(name, age, gender, interests) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.matches = [];
    this.messages = [];
    this.blockedUsers = [];
  }

  addMatch(user) {
    this.matches.push(user);
  }

  viewMatches() {
    return this.matches;
  }

  updateDetails({ name, age, gender, interests }) {
    if (name) this.name = name;
    if (age) this.age = age;
    if (gender) this.gender = gender;
    if (interests) this.interests = interests;
  }

  sendMessage(toUser, message) {
    if (!this.blockedUsers.includes(toUser)) {
      toUser.messages.push({ from: this.name, message });
    }
  }

  viewMessages() {
    return this.messages;
  }

  blockUser(user) {
    this.blockedUsers.push(user);
  }
}

class DatingApp {
  constructor() {
    this.users = [];
  }

  registerUser(name, age, gender, interests) {
    const newUser = new User(name, age, gender, interests);
    this.users.push(newUser);
    return newUser;
  }

  findMatches(user) {
    return this.users.filter(
      (u) =>
        u.gender !== user.gender &&
        u.interests.some((interest) => user.interests.includes(interest)) &&
        !user.blockedUsers.includes(u)
    );
  }

  likeUser(user, likedUser) {
    if (this.findMatches(user).includes(likedUser)) {
      user.addMatch(likedUser);
      likedUser.addMatch(user);
    }
  }
}

// Example usage:
const app = new DatingApp();
const user1 = app.registerUser("Alice", 25, "female", ["music", "movies"]);
const user2 = app.registerUser("Bob", 27, "male", ["sports", "music"]);
const user3 = app.registerUser("Charlie", 30, "male", ["movies", "travel"]);

console.log(app.findMatches(user1)); // Should show Bob and Charlie as potential matches

app.likeUser(user1, user2); // Alice likes Bob
console.log(user1.viewMatches()); // Should show Bob as a match
console.log(user2.viewMatches()); // Should show Alice as a match

// Sending messages
user1.sendMessage(user2, "Hi Bob!");
console.log(user2.viewMessages()); // Should show a message from Alice

// Blocking a user
user1.blockUser(user3);
console.log(app.findMatches(user1)); // Should not show Charlie as a potential match

// Updating user details
user1.updateDetails({ age: 26, interests: ["music", "travel"] });
console.log(user1);
