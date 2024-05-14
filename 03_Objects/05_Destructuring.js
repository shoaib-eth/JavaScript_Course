const person = {
  name: "shoaib",
  email: "shoaib@gmail.com",
  branch: "CSE",
};

const { name, email } = person;

console.log(name);
console.log(email);

// Default Values
const num = {
  a: 2,
  b: 3,
};
const { a, b, c = 5 } = num;

console.log(a);
console.log(b);
console.log(c);

// Renaming Variables
const Guest = {
  Name: "Shoaib",
  email: "shoaib@email.com",
};

const { Name: GuestName, email: GuestEmail } = Guest;

console.log(GuestName);
console.log(GuestEmail);

// Rest Syntax
const person1 = {
  name1: "john",
  age: 21,
  country: "USA",
  city: "New York",
};

const { name1, age, ...address } = person1;

console.log(name1);
console.log(age);
console.log(address);

// Parameter Destructuring
function printPersonDetails({ personName, personAge }) {
  console.log(`Name : ${name}`);
  console.log(`Age : ${age}`);
}

const personDetails = { personName: "John", personAge: 21 };

printPersonDetails(person);

// Nested Destructuring
const nestedObj = {
  person_name: "John",
  person_age: 21,
  person_email: "shoaib@gmail.com",
  person_address: {
    street: "123 Main Station",
    Dsitrict: "Gwalior",
  },
};

const {
  person_name,
  person_address: { street, Dsitrict },
} = nestedObj;

console.log(person_name);
console.log(street);
console.log(Dsitrict);

// Array Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArray = [...arr1, ...arr2];

console.log(combinedArray);

// Object Spread Operator
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combinedObject = { ...obj1, ...obj2 };

console.log(combinedObject);

// Array Destructuring

const arr = [1, 2, 3, 4, 5];

const [first, second, ...rest] = arr;

console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

// Swapping Variables

let x = 10;
let y = 20;

[x, y] = [y, x];

console.log(x); // 20
console.log(y); // 10

// Ignoring Elements

const arr3 = [1, 2, 3, 4, 5];

const [first1, , third, , fifth] = arr3;

console.log(first1); // 1
console.log(third); // 3
console.log(fifth); // 5
