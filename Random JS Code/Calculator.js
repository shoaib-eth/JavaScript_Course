class Calculator {
    constructor() {
        this.result = 0; // To support chaining
    }

    // Adds two numbers or adds to the current result
    add(a, b = null) {
        if (b === null) {
            this.validateInputs(a);
            this.result += a;
        } else {
            this.validateInputs(a, b);
            this.result = a + b;
        }
        return this;
    }

    // Subtracts two numbers or subtracts from the current result
    subtract(a, b = null) {
        if (b === null) {
            this.validateInputs(a);
            this.result -= a;
        } else {
            this.validateInputs(a, b);
            this.result = a - b;
        }
        return this;
    }

    // Multiplies two numbers or multiplies with the current result
    multiply(a, b = null) {
        if (b === null) {
            this.validateInputs(a);
            this.result *= a;
        } else {
            this.validateInputs(a, b);
            this.result = a * b;
        }
        return this;
    }

    // Divides two numbers or divides the current result
    divide(a, b = null) {
        if (b === null) {
            this.validateInputs(a);
            if (a === 0) throw new Error("Division by zero is not allowed.");
            this.result /= a;
        } else {
            this.validateInputs(a, b);
            if (b === 0) throw new Error("Division by zero is not allowed.");
            this.result = a / b;
        }
        return this;
    }

    // Resets the result to 0
    reset() {
        this.result = 0;
        return this;
    }

    // Returns the current result
    getResult() {
        return this.result;
    }

    // Validates that inputs are numbers
    validateInputs(...inputs) {
        inputs.forEach(input => {
            if (typeof input !== "number") {
                throw new TypeError("Inputs must be numbers.");
            }
        });
    }
}

// Example usage
try {
    const calc = new Calculator();
    console.log("Chained Operations Result: ", calc.add(5).multiply(3).subtract(4).divide(2).getResult()); // 7.5
    calc.reset();
    console.log("Addition: ", calc.add(5, 3).getResult()); // 8
    console.log("Subtraction: ", calc.subtract(10, 3).getResult()); // 7
    console.log("Multiplication: ", calc.multiply(5, 3).getResult()); // 15
    console.log("Division: ", calc.divide(15, 3).getResult()); // 5
} catch (error) {
    console.error("Error:", error.message);
}
