console.log("Not a Number" / 2); // NaN, such division is erroneous
console.log("Not a Number" / 2 + 5); // NaN

// Example - Special numeric values Infinity, -Infinity and NaN

console.log(1 / 0); // Infinity
console.log(Infinity); // Infinity
console.log(Infinity + 1); // Infinity
console.log(Infinity + Infinity); // Infinity
console.log(Infinity - Infinity); // NaN
console.log(1 / Infinity); // 0

// Example - NaN is sticky. Any further mathematical operation on NaN returns NaN

console.log(NaN + 5); // NaN
console.log(NaN * 5); // NaN

// Example - if there’s a NaN somewhere in a mathematical expression, it propagates to the whole result (there’s only one exception to that: NaN ** 0 is 1).

console.log(NaN ** 0); // 1

// Example - BigInt

const bigInt = 23897498023701928094176235789232344n;
console.log(bigInt);

// Example - String

let doubleQoutesString = "Hello!";
let singleQoutesString = "Hi";
let backticksString = `Hey`;

console.log(doubleQoutesString);
console.log(singleQoutesString);
console.log(backticksString);

console.log(`${doubleQoutesString} Welcome to JS World!`);

let name = "Shoaib";

console.log(`Hello ${name}`);
console.log(`The result is ${2 ** 2}`);

// Example - Boolean (logical type)

let isGreater = 4 > 1;

console.log(isGreater);

let isEven = 18;

if (isEven % 2 == 0) {
  console.log(`${isEven} is even`);
} else {
  console.log(`${isEven} is odd`);
}

// Example - `null` and `undefined`

let age = null;
console.log(age); // null

let age2;
console.log(age2); // undefined

let age3 = 18;

age3 = undefined;

console.log(age3); // undefined

// Example - typeof operator

console.log(typeof undefined); // "undefined"
console.log(typeof 0); // "number"
console.log(typeof 10n); // "bigint"
console.log(typeof true); // "boolean"
console.log(typeof "foo"); // "string"
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof Math); // "object"  (1)
console.log(typeof null); // "object"  (2)
console.log(typeof alert); // "function"  (3)

// Task - String

let name1 = "Shoaib";

console.log(`Hello! ${1}`); // Hello! 1
console.log(`Hello! ${"name"}`); // Hello! name
console.log(`Hello! ${name}`); // Hello! Shoaib
