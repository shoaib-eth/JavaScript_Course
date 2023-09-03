// Example - > 1
const personPrototype = {
  greet: function () {
    return `Hello! My Name is ${this.name}`;
  },
};

const person1 = Object.create(personPrototype);
person1.name = "Alice";

const person2 = Object.create(personPrototype);
person2.name = "John";

console.log(person1.greet());
console.log(person2.greet());

// Example - > 2
const userMethods = {
  about: function () {
    return `${this.firstName} is ${this.age} years old.`;
  },
  is18: function () {
    return (this.age = 18);
  },
};

function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(userMethods); // Create a new object with userMethods as its prototype
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
}

const user1 = createUser(
  "harshit",
  "vashisht",
  "harshit@gmail.com",
  9,
  "my address"
);
const user3 = createUser(
  "mohit",
  "vashishta",
  "harshit@gmail.com",
  17,
  "my address"
);
console.log(user1);
console.log(user1.about());
