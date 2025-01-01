// NewYear2025.js

// Function to get user input and display New Year wishes
function newYearWishes() {
  // Prompt user to enter their name
  let userName = prompt("Please enter your name:");

  // Check if user entered a name
  if (userName) {
    // Display New Year wishes with the user's name
    console.log(
      `Happy New Year 2025, ${userName}! Wishing you a year full of joy and success!`
    );
  } else {
    // If no name was entered, display a generic message
    console.log(
      "Happy New Year 2025! Wishing you a year full of joy and success!"
    );
  }
}

// Call the function to execute
newYearWishes();

// Output:
// Happy New Year 2025, John! Wishing you a year full of joy and success!
// or
// Happy New Year 2025! Wishing you a year full of joy and success!

// Explanation:
// This JavaScript code snippet defines a function called newYearWishes that prompts the user to enter their name and then displays a New Year message with the user's name. If the user enters a name, the message includes the user's name; otherwise, it displays a generic message. The function is then called to execute the code.

// The prompt function is used to get user input, and the console.log function is used to display the New Year wishes message. The function newYearWishes is defined to encapsulate the logic for displaying the message, making the code more modular and reusable.
