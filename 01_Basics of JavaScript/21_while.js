let i = 0;

while (i <= 10) {
  console.log(`The value of i is ${i}`);
  i++;
}

let count = 1;

while (count <= 5) {
  console.log(`Count: ${count}`);
  count++;
}


let x = 3;

while (x >= 0) {
  console.log(`x: ${x}`);
  x--;
}
let biggest = 0;
let numbers = [5, 10, 2, 8, 3];

while (numbers.length > 0) {
  let currentNumber = numbers.pop();
  if (currentNumber > biggest) {
    biggest = currentNumber;
  }
}

console.log(`The biggest number is ${biggest}`);
