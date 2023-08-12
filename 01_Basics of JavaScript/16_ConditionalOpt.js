// if-else statement
let age = 19;

if (age >= 18) {
  console.log("play ddlc");
} else {
  console.log("play mario");
}

// else-if
let grade = 91;

if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 50) {
  console.log("C");
} else {
  console.log("F");
}

// Ternary Operator
let age1 = 21;
let status = age1 >= 18 ? "Adult" : "Child";
console.log(status);

// Nesting in Ternary Operator
let marks = 87;
let result = marks >= 90 ? "A" : marks >= 80 ? "B" : marks >= 50 ? "C" : "F";
console.log(result);
