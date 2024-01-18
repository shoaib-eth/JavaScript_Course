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

// Null vs Undefined

console.log(null === undefined); // false
console.log(null == undefined); // true

// Strange Result: null vs 0

console.log(null > 0); // false, because null becomes a number 0 after the numeric conversion
console.log(null == 0); // false
console.log(null >= 0); // true

// Summary

console.log(5 > 4); // true
console.log("apple" > "pineapple"); // false
console.log("2" > "12"); // true
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(null == "\n0\n"); // false
console.log(null === +"\n0\n"); // false

// Solution

// Some of the reasons:

// 1. Obviously, true.
// 2. Dictionary comparison, hence false. "a" is smaller than "p".
// 3. Again, dictionary comparison, first char "2" is greater than the first char "1".
// 4. Values null and undefined equal each other only.
// 5. Strict equality is strict. Different types from both sides lead to false.
// 6. Similar to (4), null only equals undefined.
// 7. Strict equality of different types.