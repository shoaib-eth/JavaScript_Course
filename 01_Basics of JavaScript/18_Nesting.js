let winningNumber = 67;
let userGuess = +prompt("Guess a number between 1 to 50 :");

if (userGuess === winningNumber) {
  console.log("Your Guess is Right");
} else if (userGuess < winningNumber) {
  console.log("Your Guess is too low!");
} else {
  console.log("Your Guess is too high!");
}


let isRaining = true;
let isSunny = false;

if (isRaining) {
  console.log("Remember to take an umbrella!");
  if (isSunny) {
    console.log("But also wear sunscreen!");
  }
} else {
  console.log("No need for an umbrella.");
}
