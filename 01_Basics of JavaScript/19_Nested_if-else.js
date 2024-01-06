let num = parseInt(prompt("Enter a Number"));

if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// Using logical operators to combine conditions
let temperature = 25;
let isRaining = true;

if (temperature > 30 && !isRaining) {
  console.log("It's a hot and sunny day");
}
else if (temperature > 30 && isRaining) {
  console.log("It's a hot day, but it's raining");
}
else if (temperature <= 30 && !isRaining) {
  console.log("It's not raining but the temperature is moderate");
}
else {
  console.log("Don't even ask");
}