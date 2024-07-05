// Creating an object using object literal notation
const person = {
  name: "John",
  age: 30,
  hobbies: ["reading", "coding", "playing guitar"],
  greet: function () {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  },
};

// Accessing object properties
console.log(person.name); // Output: John
console.log(person.age); // Output: 30
console.log(person.hobbies); // Output: ['reading', 'coding', 'playing guitar']

// Modifying object properties
person.name = "Jane";
person.age = 25;
person.hobbies.push("painting");

// Calling object methods
person.greet(); // Output: Hello, my name is Jane and I'm 25 years old.

// Creating objects using constructor functions
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.start = function () {
    console.log(`The ${this.make} ${this.model} is starting...`);
  };
}

// Creating instances of the Car object
const car1 = new Car("Toyota", "Camry", 2020);
const car2 = new Car("Honda", "Accord", 2019);

// Accessing object properties
console.log(car1.make); // Output: Toyota
console.log(car2.model); // Output: Accord

// Calling object methods
car1.start(); // Output: The Toyota Camry is starting...
car2.start(); // Output: The Honda Accord is starting...
