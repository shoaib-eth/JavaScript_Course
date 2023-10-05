// Example - > 1
function personInfo() {
  console.log(`Person name is ${this.firstName} and Person age is ${this.age}`);
}

const person1 = {
  firstName: "Shoaib",
  age: 20,
  about: personInfo,
};

const person2 = {
  firstName: "Rohit",
  age: 23,
  about: personInfo,
};

const person3 = {
  firstName: "Aman",
  age: 18,
  about: personInfo,
};

person1.about(); // Output - > Person name is Shoaib and Person age is 20
person2.about(); // Output - > Person name is Rohit and person age is 23
person3.about(); // Output - > Perosn name is Aman and Person age is 18

// Example - > 2 : Calculator Example
const Calculator = {
  value: 0,
  add: function (num) {
    this.value += num;
  },
  subtract: function (num) {
    this.value -= num;
  },
  multiply: function (num) {
    this.value *= num;
  },
  getValue: function () {
    return this.value;
  },
};

Calculator.add(5);
Calculator.subtract(9);
Calculator.multiply(4);

console.log(Calculator.getValue()); // Output - > -16

// Example - > 3
const cars = {
  Brand: "Toyota",
  Model: "Camry",
  Start: function () {
    console.log(`Starting ${this.Brand} ${this.Model}`);
  },
};

cars.Start(); // Output - > Starting Toyota Camry

// Example - > 4 : Arrow Function and `this` Keyword
const personGreet = {
  name: "Shoaib",
  greet: function () {
    console.log(`Hello!, My Name is ${this.name}`);
  },
  greetArrow: () => {
    console.log(`Hello!, My Name is ${this.name}`);
  },
};

personGreet.greet(); // Output - > Hello!, My Name is Shoaib
personGreet.greetArrow(); // Output - > Hello!, My Name is undefind

// Another Examples by FreeCodeCamp Article
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  getThis: function () {
    return this;
  },
};

console.log("this in object method", person.getThis());

///////////////////////////////////////////////////////
const personObject1 = {
  firstName: "John",
  lastName: "Doe",
  id: 7832,
  getFullName: function () {
    return this.name + " " + this.lastName;
  },
};
console.log(`This is an abject method`, person.getFullName());
