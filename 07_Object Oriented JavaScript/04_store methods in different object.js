// Example - > 1
const userMethods = {
  about: function () {
    return `${this.firstName} is ${this.age} years old`;
  },
  is18: function () {
    return this.age >= 18;
  },
};

function createUser(firstName, lastName, age, email, address) {
  const user = {};

  user.firstName = firstName;
  user.lastName = lastName;
  user.age = age;
  user.email = email;
  user.address = address;

  // Calling Functions
  user.about = userMethods.about;
  user.is18 = userMethods.is18;

  return user;
}

const user2 = createUser("Shoaib", "Khan", 2, "shoa@gmail.com", "My Address");
console.log(user2.about());
console.log(user2.is18());
