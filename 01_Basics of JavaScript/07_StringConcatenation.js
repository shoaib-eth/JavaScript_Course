const str1 = "Hello";
const str2 = "World!";
console.log(str1 + " " + str2);

// Using concat method
let result = str1.concat(" " + str2);
console.log(result);

// Using template literals
let result1 = `${str1} ${str2}`;
console.log(result1);

// Numbers String
const num1 = "20";
const num2 = "23";
let numResult = num1 + num2;
console.log(numResult);

// For adding numbers in string
let addResult = +num1 + +num2;
console.log(addResult);