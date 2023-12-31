const person = {
  name: "Shoaib",
  course: "Computer Science Engineering",
  email: "shoaib@gmail.com",
  address: {
    street: "New Colony",
    state: "MP",
    country: "India",
  },
};

// Accessing Object Properties by Dot Notation
console.log(person.name);
console.log(person.email);
console.log(person.address.country);

// Accessing Object Properties by Bracket Notation
console.log(person["name"]);
console.log(person["email"]);
console.log(person["address"]["country"]);
// Note - > for this type of words `email address`, in which there are space between two words always use bracket notation.

// Modifying Object Properties
person.name = "Aman";
person.course = "Mechanical Engineering";

// Now accessing modified object properties
console.log(person.name);
console.log(person.course);
console.log(person.address.country);

// Adding and Deleting Properties in Object
person.gmail = "shoaib12@gmail.com";
delete person.email;

// sayHello Function Inside the Object
const person1 = {
  name: "Shoaib",
  course: "CSE",
  email: "shoaib@gmail.com",
  address: {
    street: "New Colony",
    state: "MP",
    country: "India",
  },
  sayHello: function () {
    console.log(`Hello, My Name is ${person1.name}`);
  },
};

// Calling function
person1.sayHello();

// Now Creating Array Inside Object
const person2 = {
  name: "Shoaib",
  course: "Computer Science Engineering",
  hobbies: ["Designing", "Cricket", "Travelling"],
  email: "shoaib@gmail.com",
  address: {
    street: "New Colony",
    state: "MP",
    country: "India",
  },
};

console.log(person2.hobbies[2]);
// person2.hobbies[2] - > accessing element of 2nd index in the array.
