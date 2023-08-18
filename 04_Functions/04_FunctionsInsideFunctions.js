function outerFunction() {
  console.log("This is the Outer Function");

  function innerFunction() {
    console.log("This is the Inner Funciton");
  }
  innerFunction();
}

outerFunction();

// Another Example

function counter() {
  let count = 0;

  function increment() {
    count++;
    console.log(count);
  }
  return increment();
}

const counter1 = counter;
counter1;    // Output - > 1
counter1;    // Output - > 2
