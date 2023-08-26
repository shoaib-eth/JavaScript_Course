// Example - > 1
function printArguments() {
  for (let i = 0; i <= arguments.length; i++) {
    console.log(arguments[i]);
  }
}

printArguments("Hello", "World");

// Example - > 2 : Array.from() - This method creates a new array from an `iterable` or an `array-like object`.
const arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };
const newArray = Array.from(arrayLike);
console.log(newArray); // Output - >  ['a', 'b', 'c']

// Example - > 3 : Iterating Objects
const myObject = { a: 1, b: 2, c: 3 };
for (const key of Object.keys(myObject)) {
  console.log(key, myObject[key]);
}
// Output -  > a   1
//             b   2
//             c   3
