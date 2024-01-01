// Example - > 1
let i = 5;

do {
  console.log(`The value of i is ${i}`);
  i++;
} while (i <= 1);

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
}
while (numbers.length > 0);
