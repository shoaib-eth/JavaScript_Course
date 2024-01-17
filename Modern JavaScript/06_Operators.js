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

console.log(2 + 2 + "1"); // 41 (not 221)
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

// Example - Numeric Conversion (Unary +)

let apples = "2";
let oranges = "3";

console.log(apples + oranges); // 23
console.log(+apples + +oranges); // 5

// --------------------------------------------------------------------------------

// Example - Chaininig Assignment

let num1, num2, num3;

num1 = num2 = num3 = 5;

console.log(num1); // 5
console.log(num2); // 5
console.log(num3); // 5

// --------------------------------------------------------------------------------

// Example - Modifying in Place

let n = 2;
n = n + 5;
n = n * 2;

console.log(n); // 14

// Shortest way to write the above code
let n1 = 2;
n1 += 5;
n1 *= 2;

console.log(n1); // 14

// Modify and assign

let n2 = 2;
n2 *= 3 + 5;

console.log(n2); // 16

// --------------------------------------------------------------------------------

// Example - Increment and Decrement

// Increment ++ increases a variable by 1
let counter = 2;
counter++; // works the same as counter = counter + 1, but is shorter
console.log(counter); // 3

// Decrement -- decreases a variable by 1
let counter1 = 2;
counter1--; // works the same as counter = counter - 1, but is shorter
console.log(counter1); // 1

// Postfix and Prefix

let counter2 = 1;
let a1 = ++counter2;
console.log(a1); // 2 (prefix form returns the new value)

let counter3 = 1;
let a2 = counter3++;
console.log(a2); // 1 (postfix form returns the old value)

// Example - Increment/decrement among other operators

let counter4 = 1;
console.log(2 * ++counter4); // 4 (1 + 1 = 2, then 2 * 2 = 4)

let counter5 = 1;
console.log(2 * counter5++); // 2 (2 * 1 = 2, then 1 + 1 = 2)

// One line one action

let counter6 = 1;
console.log(2 * counter6);
counter6++;
console.log(counter6); // 2 (1 + 1 = 2)

// --------------------------------------------------------------------------------
