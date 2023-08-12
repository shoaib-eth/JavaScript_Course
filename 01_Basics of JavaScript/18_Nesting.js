let winningNumber = 19;
let userGuess = +prompt("Guess a number between 1 to 50 :");

if (userGuess === winningNumber) {
  console.log("Your Guess is Right");
} else if (userGuess < winningNumber) {
  console.log("Your Guess is too low!");
} else {
  console.log("Your Guess is too high!");
}
