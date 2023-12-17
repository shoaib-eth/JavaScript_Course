// Function declaration
function add(a, b) {
  return a + b;
}

// Function expression
const subtract = function (a, b) {
  return a - b;
};

// Arrow function
const square = (num) => {
  return num * num;
};

// Higher-order function with arrow function
const calculateWithArrow = (operation, a, b) => {
  return operation(a, b);
};

// Callback function with arrow function
const callbackWithArrow = () => {
  console.log("Callback function called with arrow function");
};

// setTimeout function with arrow function
setTimeout(callbackWithArrow, 1000);

// setInterval function with arrow function
setInterval(callbackWithArrow, 2000);

// Function with default parameters and arrow function
const greetWithArrow = (name = "World") => {
  console.log(`Hello, ${name}!`);
};

// Function with rest parameters and arrow function
const sumWithArrow = (...numbers) => {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};

// Function with spread operator and arrow function
const numbersWithSpread = [1, 2, 3, 4, 5];
console.log(sumWithArrow(...numbersWithSpread));

// Function with destructuring and arrow function
const printPersonWithArrow = ({ name, age }) => {
  console.log(`Name: ${name}, Age: ${age}`);
};

const personWithArrow = { name: "John", age: 30 };
printPersonWithArrow(personWithArrow);

// Function with method chaining and arrow function
const stringWithArrow = "Hello, World!";
const reversedStringWithArrow = stringWithArrow.split("").reverse().join("");
console.log(reversedStringWithArrow);

// Function with recursion and arrow function
const factorialWithArrow = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorialWithArrow(n - 1);
  }
};

console.log(factorialWithArrow(5));
const multiply = (a, b) => a * b;

// Higher-order function
function calculate(operation, a, b) {
  return operation(a, b);
}

// Callback function
function callback() {
  console.log("Callback function called");
}

// setTimeout function
setTimeout(callback, 1000);

// setInterval function
setInterval(callback, 2000);

// Function with default parameters
function greet(name = "World") {
  console.log(`Hello, ${name}!`);
}

// Function with rest parameters
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Function with spread operator
const numbers = [1, 2, 3, 4, 5];
console.log(sum(...numbers));

// Function with destructuring
function printPerson({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

const person = { name: "John", age: 30 };
printPerson(person);

// Function with method chaining
const string = "Hello, World!";
const reversedString = string.split("").reverse().join("");
console.log(reversedString);

// Function with recursion
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));
