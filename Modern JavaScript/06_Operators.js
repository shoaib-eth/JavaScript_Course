// Example - Unary Operators
// Unary operators are operators that only operate on one value.

let x = 1;
x = -x;
console.log(x); // -1

// Example - Binary Operators
// Binary operators are operators that operate on two values.

let a = 1,
  b = 3;
console.log(b - a); // 2

// Example - Remainder Operator
// The remainder operator returns the remainder of the division of two numbers.

console.log(5 % 2); // 1
console.log(8 % 3); // 2

// Example - Exponentiation Operator
// The exponentiation operator returns the result of raising the first operand to the power of the second operand.

console.log(2 ** 3); // 8
console.log(3 ** 2); // 9

// --------------------------------------------------------------------------------

// String Concatenation

let str = "Hello";
str += " World!";
console.log(str); // Hello World!

let str1 = "Hello";
let str2 = "Programmers";

console.log(str1 + " " + str2); // Hello Programmers
console.log(`${str1} ${str2}`); // Hello Programmers

console.log("1" + 2); // 12
console.log(1 + "2"); // 12


// Complex Examples

console.log(2 + 2 + '1'); // 41 (not 221)
console.log("1" + 2 + 2); // 122 (not 14)

console.log(2 + true); // 3
console.log(2 + false); // 2
console.log(2 - true); // 1
console.log(2 * true); // 2
console.log(2 / true); // 2
console.log(2 % true); // 0
console.log(2 ** true); // 2
console.log(2 + null); // 2
console.log(2 + undefined); // NaN
console.log(2 + NaN); // NaN
console.log(2 + Infinity); // Infinity
console.log(2 - Infinity); // -Infinity
console.log(2 * Infinity); // Infinity
console.log(2 / Infinity); // 0
console.log(2 % Infinity); // 2
console.log(2 ** Infinity); // Infinity
console.log(2 + "2"); // 22
console.log(2 - "2"); // 0
console.log(2 * "2"); // 4
console.log(2 / "2"); // 1
console.log(2 % "2"); // 0
console.log(2 ** "2"); // 4
console.log(2 + "two"); // 2two
console.log(2 - "two"); // NaN
console.log(2 * "two"); // NaN
console.log(2 / "two"); // NaN
console.log(2 % "two"); // NaN
console.log(2 ** "two"); // NaN

// --------------------------------------------------------------------------------