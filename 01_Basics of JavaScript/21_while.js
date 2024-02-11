// Example - > 1
let i = 0;

while (i <= 10) {
  console.log(`The value of i is ${i}`);
  i++;
}

// Example - > 2
let count = 1;

while (count <= 5) {
  console.log(`Count: ${count}`);
  count++;
}

// Example - > 3
let x = 3;

while (x >= 0) {
  console.log(`x: ${x}`);
  x--;
}

// Example - > 4
let biggest = 0;
let numbers = [5, 10, 2, 8, 3];

while (numbers.length > 0) {
  let currentNumber = numbers.pop();
  if (currentNumber > biggest) {
    biggest = currentNumber;
  }
}

console.log(`The biggest number is ${biggest}`);

// Example - > 5

let smallest = 0;
let numbers1 = [5, 10, 2, 8, 3];

while (numbers1.length > 0) {
  let currentNumber = numbers1.pop();
  if (currentNumber < smallest) {
    smallest = currentNumber;
  }
}

console.log(`The smallest number is ${smallest}`);

// Example - > 6
let i1 = 0;

while (i1 <= 10) {
  console.log(`The value of i is ${i1}`);
  i1++;
}

// Example - > 7
let count1 = 1;

while (count1 <= 5) {
  console.log(`Count: ${count1}`);
  count1++;
}