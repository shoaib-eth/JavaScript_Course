// slice() method
const myString = "Hello World!";
let result = myString.slice(6, 12);
console.log(result);

// Another example of slice() method
const myString1 = "Hello World!";
let result1 = myString1.slice(6);
console.log(result1);

// toUpperCase() Method
let myName = "Shoaib";
let upperCase = myName.toUpperCase();
console.log(upperCase);

// toLowerCase() Method
let Greetings = "HELLO";
let lowercase = Greetings.toLowerCase();
console.log(lowercase);

// trim() method
let hello = "      Hello World         ";
console.log(hello);
console.log("Before Length without trim() : ", hello.length);
let trimmedString = hello.trim();
console.log(trimmedString);
console.log("After using trim() method : ", trimmedString.length);