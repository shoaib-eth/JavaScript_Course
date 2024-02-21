// Outer Variable
// A function can access an outer variable as well, for example:

let userName = "Shoaib";

function sayHello() {
  let message = "Hello, " + userName;

  alert(message);
}

sayHello(); // Hello, Shoaib
