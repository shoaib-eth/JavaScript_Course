// Exmple - > 1 : Sorting NUmbers Low to High
const numbers = [59, 34, 23, 567, 8907];

const sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers);

// Example - > 2 : Sorting Products Price
const products = [
  { productId: 1, productName: "p1", price: 300 },
  { productId: 2, productName: "p2", price: 3070 },
  { productId: 3, productName: "p3", price: 3000 },
  { productId: 4, productName: "p4", price: 570 },
  { productId: 5, productName: "p5", price: 590 },
];

// Low to High
const lowToHigh = products.slice(0).sort((a, b) => a.price - b.price);
console.log(lowToHigh);

// High to Low
const highToLow = products.slice(0).sort((a, b) => b.price - a.price);
console.log(highToLow);

// Example - > 3 : Sorting Objects
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 30 },
];

people.sort((a, b) => a.age - b.age);
console.log(people);

// Example - > 4 : Reversing the Sorting Order
const num = [2, 5, 9, 10, 21, 99];

num.sort((a, b) => b - a);
console.log(num);

// Example 5 - Caveat with String Sorting:
// When sorting strings, the default sort() method uses the UTF-16 code unit values of the
// characters to determine their order. This can lead to unexpected results for certain non-ASCII
// characters. To sort strings in a case-insensitive manner, you can use localeCompare() with the
// sensitivity option.

const words = ["Apple", "apple", "banana", "Orange"];
words.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));
console.log(words); // Output - ["apple", "Apple", "banana", "Orange"]

// The sensitivity: 'base' option makes the comparison case-insensitive.
// Always keep in mind that the sort() method modifies the original array. If you want to keep the
// original array unchanged, make a copy of it before sorting using slice(), as shown in the
// examples above.
