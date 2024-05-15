// Example - > 1
const numbers = [3, 5, 6, 9];

const isEven = numbers.some((number) => number % 2 === 0);
console.log(isEven); // Output - > true

// Example - > 2
const cartItems = [
  { productId: 1, productName: "Laptop", price: 35000 },
  { productId: 2, productName: "Mobile", price: 15000 },
  { productId: 3, productName: "TV", price: 10000 },
];

const myCart = cartItems.some((product) => product.price <= 50000);
console.log(myCart); // Output - > true

// Example - > 3
const names = ["Alice", "Bob", "Charlie", "David"];

const ans = names.some((name) => name.length >= 5);
console.log(ans); // Output - > true

// Example - > 4
const grades = [80, 85, 90, 75, 95];

const result = grades.some((grade) => grade >= 90);
console.log(result); // Output - > true

// Example - > 5

const students = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 25 },
  { name: "David", age: 18 },
];

const isAdult = students.some((student) => student.age >= 18);
console.log(isAdult); // Output - > true
