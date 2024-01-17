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
