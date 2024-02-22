// we could simplify it even further using a question mark operator ?:, like this:

let age = prompt("What is your age?", 18);

let welcome =
  age >= 18
    ? function () {
        alert("Hello!");
      }
    : function () {
        alert("Greetings!");
      };

welcome(); // ok now
