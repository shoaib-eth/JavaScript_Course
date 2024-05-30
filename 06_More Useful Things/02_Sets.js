// Creating a empty set
const mySet = new Set();

// Creating a set with initial values
const numbers = new Set([1, 2, 3, 4, 4]); // Duplicate calue `4` will be ignored.
const string = new Set(["apple", "mango", "apple"]); // Duplicate value (`apple`) will be ignored.

// Adding and Deleting Elements
const colors = new Set();

// Adding Elements
colors.add("Yellow");
colors.add("Orange");
colors.add("Green");
colors.add("White");

// Deleting Elements
colors.delete("Green");
console.log(colors); // Output - > {'Yellow', 'Orange', 'White'}

// Checking the Existence of an Element
console.log(colors.has(`Orange`)); // true
console.log(colors.has(`Blue`)); // false
console.log(colors.has(`Green`)); // false

// Getting the Size of a Set
console.log(colors.size); // 3

// Iterating Through a Set
for (let color of colors) {
  console.log(color);
}
// Output - >
// Yellow
// Orange
// White

// Clearing and Deleting Set
colors.clear();
console.log(colors); // Output - > Set(0) {size: 0}

// Completely delete a Set() Variable
const emptySet = new Set();
console.log(emptySet); // Set(0) {size: 0}

emptySet.add("Hello");
console.log(emptySet); // Set(1) {'Hello'}

emptySet.clear();
console.log(emptySet); // Set(0) {size: 0}

delete emptySet;
console.log(emptySet);

// Converting a Set to an Array
const myArray = Array.from(numbers);
console.log(myArray);
// Or
const myArray1 = [...string];
console.log(myArray1);

// Initializing a Set with Initial Values
const myArrayValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const mySet1 = new Set(myArrayValues);
console.log(mySet1);

// Checking the Existence of an Element

console.log(mySet1.has(5)); // true
console.log(mySet1.has(15)); // false

// Deleting Elements

mySet1.delete(5); // Removes 5 from the set
console.log(mySet1); // Output - > Set(9) {1, 2, 3, 4, 6, 7, 8, 9, 10}

// Getting the Size of a Set

console.log(mySet1.size); // 9

