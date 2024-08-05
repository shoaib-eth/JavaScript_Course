// Function to calculate percentage
function calculatePercentage(marks) {
  const totalMarks = 500; // Assuming each subject has a maximum of 100 marks
  const obtainedMarks = marks.reduce((sum, mark) => sum + mark, 0);
  return (obtainedMarks / totalMarks) * 100;
}

// Function to calculate CGPA
function calculateCGPA(percentage) {
  return (percentage / 9.5).toFixed(2);
}

// Function to calculate division
function calculateDivision(percentage) {
  if (percentage >= 80) {
    return "Distinction";
  } else if (percentage >= 60) {
    return "First Division";
  } else if (percentage >= 40) {
    return "Second Division";
  } else {
    return "Fail";
  }
}

// Function to calculate and display the result
function calculateResult() {
  const marks = []; // Array to store marks of each subject

  const readlineSync = require("readline-sync");

  // Taking marks inputs from the user
  marks.push(
    parseInt(readlineSync.question("Enter marks for Operating System:"))
  );
  marks.push(
    parseInt(readlineSync.question("Enter marks for Computer Networks:"))
  );
  marks.push(parseInt(readlineSync.question("Enter marks for DBMS:")));
  marks.push(parseInt(readlineSync.question("Enter marks for Blockchain:")));
  marks.push(parseInt(readlineSync.question("Enter marks for Cryptography:")));

  const percentage = calculatePercentage(marks);
  const cgpa = calculateCGPA(percentage);
  const division = calculateDivision(percentage);

  console.log("Percentage: " + percentage.toFixed(2) + "%");
  console.log("CGPA: " + cgpa);
  console.log("Division: " + division);
}

// Calling the calculateResult function
calculateResult();
