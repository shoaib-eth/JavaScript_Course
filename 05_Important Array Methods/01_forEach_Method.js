// Example - > 1
const numbers = [4, 7, 9, 3];

numbers.forEach(function (number, index) {
  console.log(`index is ${index} and number is ${number}`);
});

// Example - > 2
const colors = ["Red", "Green", "Orange", "White", "Black"];

colors.forEach(function (color, index) {
  console.log(`Color at index ${index} is ${color}`);
});

// Example - > 3
const numbersForSum = [1, 2, 3, 4, 5];
let sum = 0;

numbersForSum.forEach((numbers) => {
  sum += numbers;
});

console.log(`The Sum is ${sum}`);

// Example - > 4
const isEven = [2, 4, 6, 8];
let allEven = true;

isEven.forEach((number) => {
  if (number % 2 !== 0) {
    allEven = false;
  }
});

console.log(`All Elements are Even : ${allEven}`);

// Example - > 5
const doubleNumbers = [1, 2, 3, 4, 5];

doubleNumbers.forEach((number, index, array) => {
  array[index] = number * 2;
});

console.log(doubleNumbers);

// Example - > 6 : Removing duplicate elements from an array using `forEach()` and `filter()`:
const mixedNumbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const uniqueNumbers = [];
numbers.forEach((num) => {
  if (!uniqueNumbers.includes(num)) {
    uniqueNumbers.push(num);
  }
});
console.log(uniqueNumbers);

// Example - > 7 : Using `forEach()` with objects:
const person = {
  name: "Shoaib",
  course: "CSE",
  email: "shoaib23@gmail.com",
};

Object.keys(person).forEach((key) => {
  console.log(`${key} : ${person[key]}`);
});

// Example - > 7 : Removing specific elements from the array using `forEach()` and splice():
const fruits = ["Apple", "Mango", "Banana", "Orange", "Pinapple"];

fruits.forEach((fruit, index, array) => {
  if (fruit === "Banana" || fruit === "Pinapple") {
    array.splice(index, 1);
  }
});

console.log(fruits);

// Example - > 8 : Real Use Case of `forEach()` method.
const users = [
  { firstName: "Shoaib", age: 20 },
  { firstName: "Rohit", age: 21 },
  { firstName: "Aman", age: 22 },
];

users.forEach((user) => {
  console.log(user.firstName);
});
