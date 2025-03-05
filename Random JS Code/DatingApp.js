class User {
    constructor(name, age, gender, interests) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
        this.matches = [];
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
                u.interests.some((interest) => user.interests.includes(interest))
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

// Updating user details
user1.updateDetails({ age: 26, interests: ["music", "travel"] });
console.log(user1);
