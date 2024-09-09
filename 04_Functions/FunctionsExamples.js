function calculateAverage(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error("Input must be an array");
  }

  if (numbers.length === 0) {
    throw new Error("Array must not be empty");
  }

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== "number") {
      throw new Error("Array must contain only numbers");
    }
    sum += numbers[i];
  }

  return sum / numbers.length;
}

function findMax(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error("Input must be an array");
  }

  if (numbers.length === 0) {
    throw new Error("Array must not be empty");
  }

  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (typeof numbers[i] !== "number") {
      throw new Error("Array must contain only numbers");
    }
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}

function isPalindrome(word) {
  if (typeof word !== "string") {
    throw new Error("Input must be a string");
  }

  const reversedWord = word.split("").reverse().join("");
  return word === reversedWord;
}

function isPrime(number) {
  if (typeof number !== "number") {
    throw new Error("Input must be a number");
  }

  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
