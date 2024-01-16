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
