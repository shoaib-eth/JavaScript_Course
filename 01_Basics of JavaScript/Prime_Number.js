function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

const userInput = prompt("Enter a number:");
const number = parseInt(userInput);

console.log(isPrime(number));

// Example usage
console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false
