// Example - > 1
function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

var double = createMultiplier(2);
var triple = createMultiplier(3);

console.log(double(5));
console.log(triple(5));
// Output - > 10
//            15

// Example - > 2
function createGreeting(greeting) {
  return function (name) {
    return `${greeting} ${name}`;
  };
}

var hello = createGreeting("Hello");
var goodBye = createGreeting("Good Bye");

console.log(hello("Shoaib"));
console.log(goodBye("Sarfaraz"));
// Output - > Hello Shoaib
//            Good Bye Sarfaraz