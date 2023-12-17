// Function declaration
function add(a, b) {
    return a + b;
}

// Function expression
const subtract = function(a, b) {
    return a - b;
};

// Arrow function
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
const reversedString = string
    .split("")
    .reverse()
    .join("");
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
