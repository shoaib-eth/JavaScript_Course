// Example - String Conversion

let value = true;
console.log(typeof value); // boolean

value = String(value);
console.log(typeof value); // string

// Example - Numeric Conversion

console.log("10" / "5"); // 2, strings are converted to numbers

let str = "11082002";
console.log(typeof str); // string

str = Number(str); // becomes a number 11082002
console.log(typeof str); // number

let age = Number("an arbitrary string instead of a number");
console.log(age); // NaN, conversion failed

// Example - Boolean Conversion

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false

console.log(Boolean("hello")); // true
console.log(Boolean("")); // false

console.log(Boolean("0")); // true
console.log(Boolean(" ")); // spaces, also true (any non-empty string is true)
