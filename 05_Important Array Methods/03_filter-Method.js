// Example - > 1 : All the numbers are even
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isEven = numbers.filter((number) => number % 2 === 0);

console.log(isEven); // Output - > [2, 4, 6, 8, 10]

// Example - > 2 : All the numbers are odd
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isOdd = num.filter((number) => number % 2 !== 0);
console.log(isOdd); // Output - > [1, 3, 5, 7, 9]

// Example - > 3 : Filtering strings longer than 5 characters
const words = ["Blockchain", "AI", "ML", "Cloud Computing", "Data Science"];
const longWords = words.filter((word) => word.length > 5);
console.log(longWords); // Output - > ['Blockchain', 'Cloud Computing', 'Data Science']

// Example - > 4 : Filtering objects based on a property value
const products = [
  { productName: "Laptop", price: 60000 },
  { productName: "SmartPhone", price: 15000 },
  { productName: "Desktop Computer", price: 25000 },
  { productName: "Air conditioner", price: 35000 },
];

const affordableProducts = products.filter((product) => product.price < 30000);
console.log(affordableProducts);
// Output - >  {productName: 'SmartPhone', price: 15000}
//             {productName: 'Desktop Computer', price: 25000}


// Example - > 5 : with strings containing certain characters
const string = ["Etherium", "Bitcoin", "Solana", "Polkadot", "Cardano"];

const containsA = string.filter((str) => str.includes("a"));
console.log(containsA); // Output - > ['Solana', 'Polkadot', 'Cardano']
