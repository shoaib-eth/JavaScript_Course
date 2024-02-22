// Function Expression vs Function Declaration

let age = prompt("What is your age?", 18);

let welcome;

if (age >= 18) {
  welcome = function () {
    alert("Hello!");
  };
} else {
  welcome = function () {
    alert("Hi!");
  };
}

welcome(); // ok now
