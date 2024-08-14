// Function to calculate the area of a rectangle
function calculateRectangleArea(length, width) {
  return length * width;
}

// Function to calculate the area of a circle
function calculateCircleArea(radius) {
  return Math.PI * radius * radius;
}

// Function to calculate the area of a triangle
function calculateTriangleArea(base, height) {
  return (base * height) / 2;
}

// Testing the functions
console.log("Rectangle area:", calculateRectangleArea(5, 10));
console.log("Circle area:", calculateCircleArea(3));
console.log("Triangle area:", calculateTriangleArea(4, 6));
