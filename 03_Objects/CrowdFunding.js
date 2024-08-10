// Create an empty object to store funder details
const crowdfunding = {};

// Function to add funder details to the object
function addFunder(name, amount) {
    crowdfunding[name] = amount;
}

// Example usage
addFunder("John", 100);
addFunder("Sarah", 200);
addFunder("Michael", 50);

// Print the funder details
console.log(crowdfunding);