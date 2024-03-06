let fruits = ["Apple", "Banana"];

console.log(fruits.length); // 2

// Access an Array item using the index position

let first = fruits[0]; // Apple
let last = fruits[fruits.length - 1]; // Banana

// Loop over an Array

fruits.forEach(function (item, index, array) {
  console.log(item, index);
});
