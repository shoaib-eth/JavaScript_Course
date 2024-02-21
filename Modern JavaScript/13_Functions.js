// Default export:

function sayHelloToEveryOne(message = `Hello`, ...names) {
  names.forEach((name) => alert(`${message} ${name}`));
}

sayHelloToEveryOne(`Hello`, `John`, `Doe`, `Smith`); // Hello John, Hello Doe, Hello Smith
sayHelloToEveryOne(`Hi`, `John`, `Doe`, `Smith`); // Hi John, Hi Doe, Hi Smith