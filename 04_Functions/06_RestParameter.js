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

// Example - > 6

function divide(...numbers) {
  return numbers.reduce((a, b) => a / b);
}

console.log(divide(1, 2, 3)); // Output - > 0.16666666666666666
console.log(divide(1, 2, 3, 4, 5)); // Output - > 0.008333333333333333
console.log(divide(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // Output - > 2.7557319223985893e-7

// Example - > 7

function multiplyAndAdd(multiplier, ...numbers) {
  return numbers.map((number) => multiplier * number).reduce((a, b) => a + b);
}

console.log(multiplyAndAdd(2, 1, 2, 3)); // Output - > 12
console.log(multiplyAndAdd(3, 4, 5, 6)); // Output - > 63
console.log(multiplyAndAdd(4, 7, 8, 9)); // Output - > 116


// Example - > 8

function multiplyAndSubtract(multiplier, ...numbers) {
  return numbers.map((number) => multiplier * number).reduce((a, b) => a - b);
}

console.log(multiplyAndSubtract(2, 1, 2, 3)); // Output - > -8
console.log(multiplyAndSubtract(3, 4, 5, 6)); // Output - > -33
console.log(multiplyAndSubtract(4, 7, 8, 9)); // Output - > -68

// Example - > 9

function multiplyAndDivide(multiplier, ...numbers) {
  return numbers.map((number) => multiplier * number).reduce((a, b) => a / b);
}

console.log(multiplyAndDivide(2, 1, 2, 3)); // Output - > 0.3333333333333333
console.log(multiplyAndDivide(3, 4, 5, 6)); // Output - > 0.2
console.log(multiplyAndDivide(4, 7, 8, 9)); // Output - > 0.3888888888888889

// Example - > 10

function addAndSubtract(...numbers) {
  return numbers.reduce((a, b) => a + b) - numbers.reduce((a, b) => a - b);
}

console.log(addAndSubtract(1, 2, 3)); // Output - > 0
console.log(addAndSubtract(1, 2, 3, 4, 5)); // Output - > -9
console.log(addAndSubtract(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // Output - > -45

// Example - > 11

function addAndDivide(...numbers) {
  return numbers.reduce((a, b) => a + b) / numbers.reduce((a, b) => a / b);
}

console.log(addAndDivide(1, 2, 3)); // Output - > 6
console.log(addAndDivide(1, 2, 3, 4, 5)); // Output - > 15
console.log(addAndDivide(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // Output - > 55

// Example - > 12

function subtractAndDivide(...numbers) {
  return numbers.reduce((a, b) => a - b) / numbers.reduce((a, b) => a / b);
}

console.log(subtractAndDivide(1, 2, 3)); // Output - > -0.5
console.log(subtractAndDivide(1, 2, 3, 4, 5)); // Output - > -1.5
console.log(subtractAndDivide(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // Output - > -5.5