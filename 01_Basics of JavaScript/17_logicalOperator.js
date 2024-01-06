// I have to check to here that the name in my string is starting with "S".
let firstName = "Shoaib";

if (firstName[0] === "S") {
  console.log("Your name starts with `S`");
} else {
  console.log(`Your name not starts with 'S', it starts with ${firstName[0]}`);
}

// Now checking age is above 18 or below 18
let age = 21;

if (age >= 18) {
  console.log("Age is above `18` that is ", age);
} else {
  console.log("Age is below `18` that is ", age);
}

// Now using && Operator
if (firstName[0] === "S" && age >= 18) {
  console.log("Your Name starts with 'S' and age is above 18");
} else {
  console.log("else insider");
}

// Now using || (OR) Operator
if (firstName[0] === "S" || age >= 18) {
  console.log("Your Name starts with 'S' and age is above 18");
} else {
  console.log("else insider");
}

// Modulo Operaot (%)
let num = 20;

if (num % 2 === 0) {
  console.log(`${num} is even`);
} else {
  console.log(`${num} is odd`);
}

// Checking if a number is positive, negative, or zero
let number = -5;

if (number > 0) {
  console.log("The number is positive");
} else if (number < 0) {
  console.log("The number is negative");
} else {
  console.log("The number is zero");
}

// Using logical operators to combine conditions
let temperature = 25;
let isRaining = true;

if (temperature > 30 && !isRaining) {
  console.log("It's a hot and sunny day");
} else if (temperature > 30 && isRaining) {
  console.log("It's a hot day, but it's raining");
} else if (temperature <= 30 && !isRaining) {
  console.log("It's a pleasant day");
} else {
  console.log("It's a cool day");
}

// Checking if a string contains a specific character
let message = "Hello, world!";
let character = "o";

if (message.includes(character)) {
  console.log(`The string contains the character '${character}'`);
} else {
  console.log(`The string does not contain the character '${character}'`);
}

// Ternary Operator
// Syntax: condition ? exprIfTrue : exprIfFalse
// Example:
let num1 = 10;
let isEven = num1 % 2 === 0 ? true : false;
console.log(isEven);
