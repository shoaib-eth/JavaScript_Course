// Creating an array
const fruits = ['apple', 'banana', 'cherry', 'date'];

// Accessing array elements
console.log(fruits[0]); // Output: apple

// Modifying array elements
fruits[1] = 'grape';
console.log(fruits); // Output: ['apple', 'grape', 'cherry', 'date']

// Adding elements to the end of an array
fruits.push('elderberry');
console.log(fruits); // Output: ['apple', 'grape', 'cherry', 'date', 'elderberry']

// Removing the last element from an array
fruits.pop();
console.log(fruits); // Output: ['apple', 'grape', 'cherry', 'date']

// Adding elements to the beginning of an array
fruits.unshift('apricot');
console.log(fruits); // Output: ['apricot', 'apple', 'grape', 'cherry', 'date']

// Removing the first element from an array
fruits.shift();
console.log(fruits); // Output: ['apple', 'grape', 'cherry', 'date']

// Finding the index of an element in an array
const index = fruits.indexOf('cherry');
console.log(index); // Output: 2

// Removing elements from a specific position in an array
const removedElements = fruits.splice(1, 2);
console.log(fruits); // Output: ['apple', 'date']
console.log(removedElements); // Output: ['grape', 'cherry']

// Combining arrays
const moreFruits = ['fig', 'grapefruit'];
const combinedArray = fruits.concat(moreFruits);
console.log(combinedArray); // Output: ['apple', 'date', 'fig', 'grapefruit']

// Reversing an array
const reversedArray = fruits.reverse();
console.log(reversedArray); // Output: ['date', 'apple']

// Sorting an array
const sortedArray = fruits.sort();
console.log(sortedArray); // Output: ['apple', 'date']

// Checking if an element exists in an array
const exists = fruits.includes('apple');
console.log(exists); // Output: true

// Mapping over an array
const mappedArray = fruits.map(fruit => fruit.toUpperCase());
console.log(mappedArray); // Output: ['APPLE', 'DATE']

// Filtering an array
const filteredArray = fruits.filter(fruit => fruit.startsWith('a'));
console.log(filteredArray); // Output: ['apple']

// Reducing an array
const reducedValue = fruits.reduce((accumulator, fruit) => accumulator + fruit, '');
console.log(reducedValue); // Output: 'appledate'
