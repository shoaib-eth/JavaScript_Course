// Function to calculate division
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

// Function to calculate percentage
function calculatePercentage(value, total) {
  if (total === 0) {
    throw new Error("Total cannot be zero");
  }
  return (value / total) * 100;
}

// Example usage
const result = divide(10, 2);
console.log("Division result:", result);

const percentage = calculatePercentage(25, 100);
console.log("Percentage:", percentage);
