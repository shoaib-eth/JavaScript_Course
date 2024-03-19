// Example - > 1
function addNumbers(num1, num2, callback) {
  let sum = num1 + num2;
  callback(sum);
}

function printSum(sum) {
  console.log(`The Sum is ${sum}`);
}

addNumbers(5, 10, printSum);
// Output - > The Sum is 15

// Example - > 2
function myCallbackFunction() {
  console.log("This callback function was called");
}

function myFunction(callback) {
  console.log("The main function was called");
  callback();
}

myFunction(myCallbackFunction);
// output - > The main function was called
//            CallbackFunction.js:15 This callback function was called

// Example - > 3    

function myCallbackFunction() {
  console.log("This callback function was called");
}

function myFunction(callback) {
  console.log("The main function was called");
  callback();
}

myFunction(myCallbackFunction);

// output - > The main function was called
//            CallbackFunction.js:15 This callback function was called