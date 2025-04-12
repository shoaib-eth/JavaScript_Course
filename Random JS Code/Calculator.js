class Calculator {
  constructor() {
    this.result = 0;
  }

  // Adds two numbers
  add(a, b) {
    this.validateInputs(a, b);
    this.result = a + b;
    return this.result;
  }

  // Subtracts two numbers
  subtract(a, b) {
    this.validateInputs(a, b);
    this.result = a - b;
    return this.result;
  }

  // Multiplies two numbers
  multiply(a, b) {
    this.validateInputs(a, b);
    this.result = a * b;
    return this.result;
  }

  // Divides two numbers
  divide(a, b) {
    this.validateInputs(a, b);
    if (b === 0) throw new Error("Division by zero is not allowed.");
    this.result = a / b;
    return this.result;
  }

  // Validates that inputs are numbers
  validateInputs(...inputs) {
    inputs.forEach((input) => {
      if (typeof input !== "number") {
        throw new TypeError("Inputs must be numbers.");
      }
    });
  }
}

// Example usage
try {
  const calc = new Calculator();
  console.log("Addition: ", calc.add(5, 3)); // 8
  console.log("Subtraction: ", calc.subtract(10, 3)); // 7
  console.log("Multiplication: ", calc.multiply(5, 3)); // 15
  console.log("Division: ", calc.divide(15, 3)); // 5
} catch (error) {
  console.error("Error:", error.message);
}
