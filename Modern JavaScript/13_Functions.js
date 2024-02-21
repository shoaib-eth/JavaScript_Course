// returning a value from a function

function checkAge(age) {
  if (age >= 18) {
    return "Access Greanted";
  } else {
    return "Access Denied";
  }
}

let result = checkAge(prompt("How old are you?"));
alert(result);
