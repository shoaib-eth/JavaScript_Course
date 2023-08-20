// Example - > 1
const newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

newArray.fill(11, 3, 8);
console.log(newArray); // Output - > [1, 2, 3, 11, 11, 11, 11, 11, 9, 10]

// Example - > 2
const myArray = [10, 20, 30, 40, 50];

myArray.fill(100);
console.log(myArray); // Output - >  [100, 100, 100, 100, 100]

// Example - > 3
const array = new Array(10).fill(0);
console.log(array);
// In this example, a new array myArray is created with a length of 10 using the new Array(10)
// syntax. The fill(0) method is then called on this array, which sets all elements of the array to
// 0. The output will be an array with 10 elements, all filled with the value 0:
// Output - [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// Example - > 4
const fruitArray = ["apple", "banana", "orange", "kiwi", "grapes"];

fruitArray.fill("mango", 1, 4);
console.log(fruitArray);
