// Outer Variable
// A function can access an outer variable as well, for example:

let userName = prompt("Enter your name: ");

function sayHello() {
  let message = "Hello";

  alert(message + ", " + userName);
}

sayHello(); // Hello, Shoaib
