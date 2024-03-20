// Example - > 1
function sum(...numbers) {
  let total = 0;

  for (let number of numbers) {
    total += number;
  }
  return total;
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Example - > 2
function join(saperator, ...strings) {
  return strings.join(saperator);
}

console.log(join("-", "x", "y", "z"));
console.log(join("/", "18", "08", "2023"));
console.log(join(":", "10", "15", "05"));

// Example - > 3

function multiply(multiplier, ...numbers) {
  return numbers.map((number) => multiplier * number);
}

console.log(multiply(2, 1, 2, 3)); // Output - > [2, 4, 6]
console.log(multiply(3, 4, 5, 6)); // Output - > [12, 15, 18]
console.log(multiply(4, 7, 8, 9)); // Output - > [28, 32, 36]

// Example - > 4

function add(...numbers) {
  return numbers.reduce((a, b) => a + b);
}

console.log(add(1, 2, 3)); // Output - > 6
console.log(add(1, 2, 3, 4, 5)); // Output - > 15
console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // Output - > 55

// Example - > 5

function subtract(...numbers) {
  return numbers.reduce((a, b) => a - b);
}

console.log(subtract(1, 2, 3)); // Output - > -4
console.log(subtract(1, 2, 3, 4, 5)); // Output - > -13
console.log(subtract(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // Output - > -53


