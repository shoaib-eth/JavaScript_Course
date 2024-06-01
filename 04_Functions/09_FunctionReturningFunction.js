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

// Example - > 3

function createCounter() {
  let counter = 0;
  return function () {
    return ++counter;
  };
}

var increment = createCounter();
console.log(increment());  // 1
console.log(increment());  // 2
console.log(increment());  // 3

// Example - > 4

function createCounter() {
  let counter = 0;
  return function () {
    return ++counter;
  };
}

var increment = createCounter();
console.log(increment());  // 1
console.log(increment());  // 2
console.log(increment());  // 3

var increment2 = createCounter();
console.log(increment2());  // 1
console.log(increment2());  // 2
console.log(increment2());  // 3

// Example - > 5

function createCounter() {
  let counter = 0;
  return {
    increment: function () {
      return ++counter;
    },
    decrement: function () {
      return --counter;
    },
  };
}

var counter = createCounter();
console.log(counter.increment());  // 1
console.log(counter.increment());  // 2
console.log(counter.increment());  // 3
console.log(counter.decrement());  // 2
console.log(counter.decrement());  // 1
console.log(counter.decrement());  // 0

// Example - > 6

function createCounter() {
  let counter = 0;
  return {
    increment: function () {
      return ++counter;
    },
    decrement: function () {
      return --counter;
    },
  };
}

var counter = createCounter();
console.log(counter.increment());  // 1
console.log(counter.increment());  // 2
console.log(counter.increment());  // 3
