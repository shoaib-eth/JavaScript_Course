// Example - > 1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const reducedValue = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  100
);
console.log(reducedValue); // Output - > 155

// Example - > 2
const userCart = [
  { productId: 1, productName: "Laptop", price: 50000 },
  { productId: 2, productName: "Smart Phone", price: 15000 },
  { productId: 3, productName: "TV", price: 20000 },
];

const totalAmount = userCart.reduce(
  (totalPrice, currentItems) => totalPrice + currentItems.price,
  200
);
console.log(totalAmount); // Output - > 85200

// Example - > 3 : Find the maximum value in an array
const num = [2, 56, 89, 100, 134, 67, 34];

const maximumNumbers = num.reduce(
  (max, current) => (current > max ? current : max),
  num[0]
);
console.log(maximumNumbers); // Output - > 134

// Example - > 4 : Flatten an array of arrays
const array = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flattenArray = array.reduce(
  (result, currentArray) => result.concat(currentArray),
  []
);
console.log(flattenArray); // Output - > [1, 2, 3, 4, 5, 6]

// Example - > 5 : Count occurrences of elements in an array
// const fruits = ["apple", "banana", "orange", "banana", "apple", "apple"];

// const fruitsCount=fruits.reduce((counts, fruit)=>{
//     counts[fruit]=(counts[fruit]|| 0)
// })
