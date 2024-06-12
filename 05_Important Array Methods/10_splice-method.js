// Example - > 1
const fruits = ["apple", "banana", "cherry", "dates"];

// Remove 'banana' and 'cherry' from the array
const removedFruits = fruits.splice(1, 2);
console.log(fruits); // Output - > ['apple', 'dates']
console.log(removedFruits); // Output - > ['banana', 'cherry']

// Example - > 2
const colors = ["red", "blue", "green"];

// Add 'yellow' and 'orange' after 'blue' (index 2)
colors.splice(2, 0, "yellow", "orange");
console.log(colors); // Output - > ['red', 'blue', 'yellow', 'orange', 'green']

// Example - > 3
const animals = ["dog", "cat", "elephant"];

// Replace 'cat' with 'tiger'
animals.splice(1, 1, "tiger");
console.log(animals); // Output - > ['dog', 'tiger', 'elephant']

// Example - > 4
const numbers = [1, 2, 3, 4, 5];

// Remove two elements starting from index 1 and
numbers.splice(1, 2, 10, 11, 12, 13, 14, 15);
console.log(numbers); // Output - > [1, 10, 11, 12, 13, 14, 15, 4, 5]

// Example -> 5 : Negative Indices
let letters = ["a", "b", "c", "d", "e"];

// Remove last two elements ('d' and 'e')
letters.splice(-2);
console.log(letters); // Output - > ['a', 'b', 'c']

// Example - > 6
const lettersArray = ["a", "b", "c", "d", "e"];

// Remove all elements from index 2 to the end of the array
const removedLetters = lettersArray.splice(2);
console.log(lettersArray); // Output - > ['a', 'b']
console.log(removedLetters); // output - > ['c', 'd', 'e']

// Example - > 7
const fruitsArray = ["apple", "banana", "cherry"];

// Insert 'orange' and 'grape' at index 1 (after 'apple')
fruitsArray.splice(1, 0, "orange", "grapes");
console.log(fruitsArray); // Output - > ['apple', 'orange', 'grapes', 'banana', 'cherry']

// Example - > 8 : Using Negative Indices
const letterArray = ["a", "b", "c", "d"];

// Remove 'b' and 'c' using negative indexes
letterArray.splice(-3, 2);
console.log(letterArray); // Output - > ['a', 'd']

// Example - > 9

const colorsArray = ["red", "blue", "green"];

// Replace 'blue' with 'yellow' using negative index
colorsArray.splice(-2, 1, "yellow"); 
console.log(colorsArray); // Output - > ['red', 'yellow', 'green']

// Example - > 10

const numbersArray = [1, 2, 3, 4, 5];

// Remove all elements starting from index 2 using negative index
numbersArray.splice(-3);
console.log(numbersArray); // Output - > [1, 2]


// Example - > 11

const alphabets = ["a", "b", "c", "d", "e"];

// Remove 'b' and 'c' and insert 'x', 'y', 'z' at their position
alphabets.splice(1, 2, "x", "y", "z");
console.log(alphabets); // Output - > ['a', 'x', 'y', 'z', 'd', 'e']