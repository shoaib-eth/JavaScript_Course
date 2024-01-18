// Boolean Comparison
let a = 5;
let b = 4;

console.log(a > b); // true
console.log(a < b); // false

// String Comparison

let a1 = "Z";
let b1 = "A";

console.log(a1 > b1); // true
console.log(a1 < b1); // false

console.log("Z" > "a"); // false
console.log("a" > "Z"); // true

console.log("John" > "Alice"); // true
console.log("John" > "Alice"); // true

console.log("Glow" > "Glee"); // true
console.log("Bee" > "Be"); // true

// Comparison of Different Types

console.log("2" > 1); // true, string '2' becomes a number 2
console.log("01" == 1); // true, string '01' becomes a number 1

console.log(true == 1); // true
console.log(false == 0); // true

// Strict Equality

console.log(0 == false); // true
console.log("" == false); // true

console.log(0 === false); // false, because the types are different
console.log("" === false); // false, because the types are different

