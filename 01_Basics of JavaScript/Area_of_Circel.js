// Prompt the user to enter the radius of the circle
const radius = parseFloat(prompt("Enter the radius of the circle:"));

// Calculate the area of the circle using a function
function calculateArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}

// Call the function and store the result in a variable
const area = calculateArea(radius);

// Display the result
console.log(`The area of the circle is: ${area}`);



