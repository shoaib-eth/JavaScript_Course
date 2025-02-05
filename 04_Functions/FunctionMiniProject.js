// Function to calculate the area of a rectangle
function calculateArea(length, width) {
  return length * width;
}

// Function to calculate the perimeter of a rectangle
function calculatePerimeter(length, width) {
  return 2 * (length + width);
}

// Main function to prompt user for input and display results
function main() {
  const length = parseFloat(prompt("Enter the length of the rectangle:"));
  const width = parseFloat(prompt("Enter the width of the rectangle:"));

  if (isNaN(length) || isNaN(width)) {
    console.log("Invalid input. Please enter numeric values.");
    return;
  }

  const area = calculateArea(length, width);
  const perimeter = calculatePerimeter(length, width);

  console.log(`The area of the rectangle is: ${area}`);
  console.log(`The perimeter of the rectangle is: ${perimeter}`);
}

// Call the main function to execute the program
main();
