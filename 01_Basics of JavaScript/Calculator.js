function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));

const operation = parseInt(
    prompt(
        "Choose an operation:\n1. Addition\n2. Subtraction\n3. Division\n4. Multiplication"
    )
);

let result;
let operationName;
if (operation === 1) {
    result = add(num1, num2);
    operationName = "Addition";
} else if (operation === 2) {
    result = subtract(num1, num2);
    operationName = "Subtraction";
} else if (operation === 3) {
    result = divide(num1, num2);
    operationName = "Division";
} else if (operation === 4) {
    result = multiply(num1, num2);
    operationName = "Multiplication";
} else {
    console.log("Invalid operation");
}

console.log("Result:", result);
console.log("Operation:", operationName);
