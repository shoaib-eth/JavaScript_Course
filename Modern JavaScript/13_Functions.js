// Parameters:

function showMessage(from, text) {
  alert(from + " : " + text);
}

showMessage(prompt("Enter your name"), prompt("Enter your message"));

// Parameter with prompt function is used to take input from user and then it is passed to the function as an argument.