function createUser(firstName, lastName, email, age, address) {
  const user = {}; // Create an empty object to store user data.

  // Set properties of the user object based on the provided parameters.
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;

  // Add the 'about' method to the user object.
  user.about = function () {
    return `${this.firstName} is ${this.age} years old`;
  };

  // Add the 'is18' method to the user object.
  user.is18 = function () {
    return this.age >= 18;
  };

  return user; // Return the Created User Object

  // Create a user object using the createUser function.
  const user1 = createUser(
    "Shoaib",
    "Khan",
    "shoaib@gmail.com",
    20,
    "My Address"
  );
}

console.log(user1);
const is18 = user1.is18();
console.log(is18);

const about1 = user1.about();
console.log(about1);
