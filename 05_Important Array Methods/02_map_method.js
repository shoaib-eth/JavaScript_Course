// Example - > 1 : squaredNumbers
const numbers = [2, 4, 6, 8, 10];

const squaredNumbers = numbers.map((number) => number * number);

console.log(squaredNumbers); // Output - > [4, 16, 36, 64, 100]

// Example - > 2
const person = [
  { name: "John", age: 20 },
  { name: "Alice", age: 21 },
  { name: "Morgan", age: 22 },
];

const personDetails = person.map((personName) => personName.name);
console.log(personDetails); // Output - > ['John', 'Alice', 'Morgan']

// Example - > 3 : Using `map()` to convert data types:
const numbersAsString = ["1", "4", "9", "5"];

const numbersAsInteger = numbersAsString.map((str) => parseInt(str));

console.log(numbersAsInteger); // Output - > [1, 4, 9, 5]

// Example - > 3 : Using `map()` with the index parameter
const num = [1, 2, 3, 4, 5];
const squaredIndexedNumbers = numbers.map((number, index) => number * index);
console.log(squaredIndexedNumbers); // Output - > [0, 4, 12, 24, 40]
