// Default export:

function sayHello(name, message = `Hello`) {
  alert(`${message}, ${name}!`);
}

sayHello(prompt(`Enter your name`));
