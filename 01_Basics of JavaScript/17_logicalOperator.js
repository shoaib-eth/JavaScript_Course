// I have to check to here that the name in my string is starting with "S".
let firstName = "Shoaib";

if (firstName[0] === "S") {
  console.log("Your name starts with `S`");
} else {
  console.log(`Your name not starts with 'S', it starts with ${firstName[0]}`);
}

// Now checking age is above 18 or below 18
let age = 21;

if (age >= 18) {
  console.log("Age is above `18` that is ", age);
} else {
  console.log("Age is below `18` that is ", age);
}

// Now using && Operator
if (firstName[0] === "S" && age >= 18) {
  console.log("Your Name starts with 'S' and age is above 18");
} else {
  console.log("else insider");
}

// Now using || (OR) Operator
if (firstName[0] === "S" || age >= 18) {
  console.log("Your Name starts with 'S' and age is above 18");
} else {
  console.log("else insider");
}

// Modulo Operaot (%)
let num = 21;

if (num % 2 === 0) {
  console.log(`${num} is even`);
} else {
  console.log(`${num} is odd`);
}
