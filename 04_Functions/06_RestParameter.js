// Example - > 1
function sum(...numbers) {
  let total = 0;

  for (let number of numbers) {
    total += number;
  }
  return total;
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Example - > 2
function join(saperator, ...strings) {
  return strings.join(saperator);
}

console.log(join("-", "x", "y", "z"));
console.log(join("/", "18", "08", "2023"));
console.log(join(":", "10", "15", "05"));
