// Greet
function greet(name) {
  console.log(`Hello! ${name}`);
}

greet("Shoaib");

// Adding values
function add(a, b) {
  return a + b;
}

let result = add(2, 3);
console.log(`The sum is ${result}`);

// Even or Odd
function isEven(value) {
  if (value % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let even = isEven(100);
console.log(even);

// String in function
function myStr(string) {
  return string.charAt(0);
}

let stringResult = myStr("Shoaib");
console.log(stringResult);
