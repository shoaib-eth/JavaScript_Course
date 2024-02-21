// Example 2 - Local Variables inside a function

function showMessage() {
  let message = "Hello, I'm JavaScript!"; // Local variable

  alert(message);
}

showMessage(); // Hello, I'm JavaScript!

alert(message); // Error! The variable is local to the function
