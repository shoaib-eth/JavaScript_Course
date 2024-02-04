// While loop

// Example - 1
let i = 0;

while (i <= 5) {
  alert(i);
  i++;
}

// Example - 2

let i1 = 3;

while (i1) {
  alert(i1);
  i1--;
}

// do - while loop

let i3 = 0;

do {
  alert(i3);
  i++;
} while (i3 < 3);

// for loop

for (let i = 0; i < 3; i++) {
  alert(i);
}

// Breaking the loop

let sum = 0;

while (true) {
  let value = +prompt("Enter a number", "");

  if (!value) break;

  sum += value;
}

alert("Sum: " + sum);

// Continue to the next iteration
