// Initialize an empty array to store funder details
let funders = [];

// Function to add funder details
function addFunder(name, amount) {
  funders.push({ name, amount });
}

// Function to withdraw all funded amount and reset the array
function withdrawFunds() {
  // Perform the withdrawal logic here
  // ...

  // Reset the funders array
  funders = [];
}

// Example usage
addFunder("John", 1000);
addFunder("Alice", 2000);
addFunder("Bob", 1500);

console.log(funders); // Output: [{ name: "John", amount: 1000 }, { name: "Alice", amount: 2000 }, { name: "Bob", amount: 1500 }]

withdrawFunds();
console.log(funders); // Output: []