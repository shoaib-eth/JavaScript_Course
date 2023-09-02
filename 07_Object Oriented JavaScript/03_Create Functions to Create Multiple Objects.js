// Example - > 1
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

// Example - > 2
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
    return `${this.firstName} is ${this.age} years old.`;
  };

  // Add the 'is18' method to the user object.

  user.is18 = function () {
    return this.age >= 18;
  };

  return user; // Return the created user object.
}

// Create a user object using the createUser function.
const user1 = createUser(
  "harshit",
  "vashsith",
  "harshit@gmail.com",
  19,
  "my address"
);

// Log the user object.
console.log(user1);

// Call the 'is18' method and log the result.
const is18 = user1.is18();
console.log(is18);

// Call the 'about' method and log the result.
const about = user1.about();
console.log(about);

// Example - > 3
function createCar(make, model, year) {
  const car = {};
  car.make = make;
  car.model = model;
  car.year = year;

  car.drive = function () {
    return `${this.make} ${this.model} is driving.`;
  };

  return car;
}

const car1 = createCar("Toyota", "Camry", 2020);
console.log(car1);
// about: This method returns a string that includes the user's firstName and age.
// is18: This method returns true if the user's age is 18 or older, and false otherwise.

const car2 = createCar("Honda", "Civic", 2019);
console.log(car2);

console.log(car1.drive());
console.log(car2.drive());