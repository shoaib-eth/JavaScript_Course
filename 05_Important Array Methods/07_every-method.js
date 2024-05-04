// Example - > 1
const numbers = [2, 4, 6, 8, 10];

const isEven = numbers.every((number) => number % 2 === 0);
console.log(`All The Elements Are Even : ${isEven}`);

// Example - > 2
const userCart = [
  { productId: 1, ProductName: "Laptop", price: 45000 },
  { productId: 2, ProductName: "Mobile", price: 20000 },
  { productId: 3, ProductName: "TV", price: 15000 },
];

const myCart = userCart.every((cartItem) => cartItem.price <= 50000);
console.log(`Is Every Cart Items Price Below 50000 : ${myCart}`);

// Example - > 3

const myCart2 = userCart.every((cartItem) => cartItem.price <= 20000);
console.log(`Is Every Cart Items Price Below 20000 : ${myCart2}`);  

// Example - > 4

const myCart3 = userCart.every((cartItem) => cartItem.price <= 45000);
console.log(`Is Every Cart Items Price Below 45000 : ${myCart3}`); // false

// Example - > 5

const myCart4 = userCart.every((cartItem) => cartItem.price <= 15000);
console.log(`Is Every Cart Items Price Below 15000 : ${myCart4}`); // true