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

// Switch Statement

let day = 3;

switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid Day");
}
// Output: Wednesday

// Using Switch Statement with Ternary Operator

let day1 = 3;

let dayName = day1 === 0 ? "Sunday" : day1 === 1 ? "Monday" : day1 === 2 ? "Tuesday" : day1 === 3 ? "Wednesday" : day1 === 4 ? "Thursday" : day1 === 5 ? "Friday" : day1 === 6 ? "Saturday" : "Invalid Day";

console.log(dayName);
// Output: Wednesday