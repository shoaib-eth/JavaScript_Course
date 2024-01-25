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

let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert("The time is 12:30");
}
