// Example - 1

/*let year = prompt(
  "In which year was ECMAScript-2015 specification published?",
  ""
);

if (year == 2015) {
  alert("You are right!");
  alert("You are really smart!");
}*/

// Example - 2

/*let year2 = prompt(
  "In which year was ECMAScript-2015 specification published?",
  ""
);

if (year2 == 2015) {
  alert("You are right!");
} else {
  alert("How can you be so wrong?");
} */

// Example - 3

/*
let year3 = prompt(
  "In which year was ECMAScript-2015 specification published?",
  ""
);

if (year3 > 2015) {
  alert("Too early...");
} else if (year3 < 2015) {
  alert("Too Late...");
} else {
  alert("Exactly!");
}
*/

// Example - 4 : Conditional Operator '?'

/*
let accessAllowed;
let age = prompt("How old are you?", "");

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}
*/

// Example - 5 : Terinary Operator '?'

let ageTernary = ageTernary > 18 ? true : false;
alert(ageTernary);

let ageTernary2 = ageTernary2 > 18; // without if statement (same as above) (if ageTernary2 > 18 is true then ageTernary2 = true)
