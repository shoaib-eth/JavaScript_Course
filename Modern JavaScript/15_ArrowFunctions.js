// For instance, to dynamically create a function

let age = prompt("What is your age?", 18);

let welcome = age >= 18 ? () => alert("Hello!") : () => alert("Greetings!");

welcome(); // ok now
// The code becomes much shorter, and more readable.