// Function to calculate the area of a rectangle
function calculateArea(length, width) {
  return length * width;
}

// Function to calculate the perimeter of a rectangle
function calculatePerimeter(length, width) {
  return 2 * (length + width);
}

// Main function to prompt user for input and display results
function main1() {
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
main1();

// Function to calculate the diagonal of a rectangle
function calculateDiagonal(length, width) {
  return Math.sqrt(length * length + width * width);
}

// Function to check if the rectangle is a square
function isSquare(length, width) {
  return length === width;
}

// Update the main function to include new calculations and checks
function main2() {
  const length = parseFloat(prompt("Enter the length of the rectangle:"));
  const width = parseFloat(prompt("Enter the width of the rectangle:"));

  if (isNaN(length) || isNaN(width)) {
    console.log("Invalid input. Please enter numeric values.");
    return;
  }

  const area = calculateArea(length, width);
  const perimeter = calculatePerimeter(length, width);
  const diagonal = calculateDiagonal(length, width);
  const squareCheck = isSquare(length, width);

  console.log(`The area of the rectangle is: ${area}`);
  console.log(`The perimeter of the rectangle is: ${perimeter}`);
  console.log(`The diagonal of the rectangle is: ${diagonal}`);
  console.log(`Is the rectangle a square? ${squareCheck ? "Yes" : "No"}`);
}

// Call the main function to execute the program
main2();
