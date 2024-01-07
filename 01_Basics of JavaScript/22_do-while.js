// Example - > 1
let i1 = 5;

do {
  console.log(`The value of i is ${i1}`);
  i++;
} while (i1 <= 1);

// Example - > 2
let count = 1;

do {
  console.log(`Count: ${count}`);
  count++;
} while (count <= 5);

// Example - > 3
let x = 3;

do {
  console.log(`x: ${x}`);
  x--;
} while (x >= 0);

// Example - > 4
let biggest = 0;
let numbers = [5, 10, 2, 8, 3];

do {
  let currentNumber = numbers.pop();
  if (currentNumber > biggest) {
    biggest = currentNumber;
  }
} while (numbers.length > 0);

console.log(`The biggest number is ${biggest}`);

// Example - > 5

let i = 0;

do {
  console.log(`The value of i is ${i2}`);
  i2++;
} while (i2 <= 10);

// Example - > 6
let count2 = 1;

do {
  console.log(`Count: ${count2}`);
  count2++;
} while (count2 <= 6);

// Example - > 7

let x2 = 3;

do {
  console.log(`x: ${x2}`);
  x2--;
} while (x2 >= 0);
