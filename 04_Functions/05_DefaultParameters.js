// Example - > 1
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(4));
console.log(multiply(3, 7));

// Example - > 2
function greet(name, greeting = "Hello!") {
  return `${greeting} ${name}`;
}

console.log(greet("Shoaib"));
console.log(greet("Shoaib", "Hi!"));
