// OR `||` Operator

/*
alert(true || true); // true
alert(false || true); // true
alert(true || false); // true
alert(false || false); // false
*/

// OR `||` Operator with non-boolean values

/*
alert(1 || 0); // 1 (1 is truthy)
alert(true || "no matter what"); // (true is truthy)

alert(null || 1); // 1 (1 is the first truthy value)
alert(null || 0 || 1); // 1 (the first truthy value)
alert(undefined || null || 0); // 0 (all falsy, returns the last value)
*/

// OR `||` Operator with if statement

/*
let hour = 9;

if (hour < 10 || hour > 18) {
  alert("The office is closed.");
}
*/

/*
let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert("The office is closed.");
}
*/

// && Operator

/*
alert(true && true); // true
alert(false && true); // false
alert(true && false); // false
alert(false && false); // false
*/

// An example with if

/*
let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert("The time is 12:30");
}
*/

// NOT `!` Operator

/*
alert(!true); // false
alert(!0); // true
*/

// NOT `!` Operator with if

/*
alert(!"non-empty string"); // false
alert(!null); // true
*/

// NOT `!` Operator with double NOT `!!`

/*
alert(!!"non-empty string"); // true
alert(!!null); // false
*/

// Task 1

/*
alert(null || 2 || undefined); // 2
*/

// Task 2

/*
alert(alert(1) || 2 || alert(3)); // 1, 2
*/

// Task 3

/*
alert(1 && null && 2); // null
*/

// Task 4

/*

alert(alert(1) && alert(2)); // 1, undefined

*/

// Task 5

/*

alert(null || (2 && 3) || 4); // 3

*/

// Task 6

/*

let age = prompt("What is your age?", 18);

if (age >= 14 && age <= 90) {

  alert("Your age is between 14 and 90");

}

*/

// Task 7

/*

let age = prompt("What is your age?", 18);

if (!(age >= 14 && age <= 90)) {

  alert("Your age is not between 14 and 90");

}

*/

// Task 8

/*

let age = prompt("What is your age?", 18);

if (age < 14 || age > 90) {

  alert("Your age is not between 14 and 90");

}

*/

// Task 9

/*


if (-1 || 0) alert( 'first' ); // first

if (-1 && 0) alert( 'second' ); // nothing

if (null || -1 && 1) alert( 'third' ); // third

*/

// Task 10

let userName = prompt("Who's there?", "");

if (userName == "Admin") {
  let pass = prompt("Password?", "");

  if (pass == "TheMaster") {
    alert("Welcome!");
  } else if (pass == "" || pass == null) {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (userName == "" || userName == null) {
  alert("Canceled");
} else {
  alert("I don't know you");
}
