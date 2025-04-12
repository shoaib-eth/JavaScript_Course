class Calculator {
    // Adds two numbers
    add(a, b) {
        this.validateInputs(a, b);
        return a + b;
    }

    // Subtracts the second number from the first
    subtract(a, b) {
        this.validateInputs(a, b);
        return a - b;
    }

    // Multiplies two numbers
    multiply(a, b) {
        this.validateInputs(a, b);
        return a * b;
    }

    // Divides the first number by the second
    divide(a, b) {
        this.validateInputs(a, b);
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }

    // Validates that inputs are numbers
    validateInputs(a, b) {
        if (typeof a !== "number" || typeof b !== "number") {
            throw new TypeError("Inputs must be numbers.");
        }
    }
}

// Example usage
try {
    const calc = new Calculator();
    console.log("Addition: ", calc.add(5, 3)); // 8
    console.log("Subtraction: ", calc.subtract(5, 3)); // 2
    console.log("Multiplication: ", calc.multiply(5, 3)); // 15
    console.log("Division: ", calc.divide(5, 3)); // 1.666...
} catch (error) {
    console.error("Error:", error.message);
}
