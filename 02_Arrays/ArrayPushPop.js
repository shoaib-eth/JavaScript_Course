// Example 1
const fruits = ["apple", "banana", "orange"];
fruits.push("grape", "kiwi");
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape', 'kiwi']

// Example 2

const fruits1 = ["apple", "banana", "orange"];
fruits1.pop();
console.log(fruits1); // Output: ['apple', 'banana']

// Example 3

const fruits2 = ["apple", "banana", "orange"];
fruits2.shift();
console.log(fruits2); // Output: ['banana', 'orange']

// Example 4

const fruits3 = ["apple", "banana", "orange"];
fruits3.unshift("kiwi");
console.log(fruits3); // Output: ['kiwi', 'apple', 'banana', 'orange']

// Example 5

const fruits4 = ["apple", "banana", "orange"];
const pos = fruits4.indexOf("banana");
console.log(pos); // Output: 1

// Example 6

const fruits5 = ["apple", "banana", "orange"];
const removedItem = fruits5.splice(1, 1);
console.log(fruits5); // Output: ['apple', 'orange']

// Example 7

const vegetables = ["cabbage", "turnip", "radish", "carrot"];
const pos1 = 1;
const n = 2;
const removedItems = vegetables.splice(pos1, n);
console.log(vegetables); // Output: ['cabbage', 'carrot']

// Example 8

const fruits6 = ["apple", "banana", "orange"];
const shallowCopy = fruits6.slice();
console.log(shallowCopy); // Output: ['apple', 'banana', 'orange']

// Example 9

const fruits7 = ["apple", "banana", "orange"];
const shallowCopy1 = fruits7.slice(1, 3);
console.log(shallowCopy1); // Output: ['banana', 'orange']

// Example 10

const fruits8 = ["apple", "banana", "orange"];
const shallowCopy2 = fruits8.slice(1);
console.log(shallowCopy2); // Output: ['banana', 'orange']
