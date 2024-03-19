// Adding the number
const add = (a, b) => {
  return a + b;
};

let addResult = add(3, 7);
console.log(addResult);

// Since the arrow function has only one statement in the function body, it can be further simplified as follows
const multiply = (a, b) => a * b;

let multiplyResult = multiply(4, 7);
console.log(multiplyResult);

// Arrow Function Expression
const sayHello = (string) => console.log(`Hello! ${string}`);

sayHello("Shoaib");

// Function to double the given number
const double = (num) => num * 2;

console.log(double(5));

// Arrow function with object literals
const createPerson = (personName, personAge) =>
  console.log({ Name: personName, Age: personAge });

createPerson("John", 21);

// Arrow function with no parameters
const hello = () => console.log("Hello World!");

hello();

// Arrow function with multiple parameters

const addNumbers = (num1, num2) => console.log(num1 + num2);

addNumbers(5, 10); // Output - > 15
