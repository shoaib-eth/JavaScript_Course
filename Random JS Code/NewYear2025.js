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
