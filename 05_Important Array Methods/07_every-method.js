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
