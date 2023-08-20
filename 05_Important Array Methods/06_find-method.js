// Example - > 1
const myArray = ["hello", "Cat", "Dog", "Lion"];

const ans = myArray.find((string) => string.length === 3);
console.log(ans);

// Example - > 2
const users = [
  { userId: 1, userName: "Shoaib" },
  { userId: 2, userName: "Aman" },
  { userId: 3, userName: "Rohit" },
];

const myUser = users.find((user) => user.userId === 2);
console.log(myUser);

// Example - > 3 : Finding Even Number
const numbers = [23, 59, 1, 3, 73, 90, 67, 998];

const isEven = numbers.find((number) => number % 2 === 0);
console.log(isEven);

// Example - > 4 : Finding Orange in Fruit Array
const fruits = ["apple", "banana", "orange", "grape"];

const foundFruit = fruits.find((fruit) => {
  if (fruit === "orange") return true;
  else false;
});
console.log(foundFruit);

// Example - > 4
const students = [
  { name: "John", age: 25 },
  { name: "Alice", age: 22 },
  { name: "Bob", age: 28 },
  { name: "Eve", age: 20 },
];

const adultStudent = students.find(
  (student) => student.age >= 18 && student.age <= 25
);
console.log(adultStudent);
