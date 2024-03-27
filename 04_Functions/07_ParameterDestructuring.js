// Destructuring Objects
function printUser({ name, age }) {
  console.log(`User name is ${name} and they are ${age} years old!`);
}

const user = {
  name: "John Doe",
  age: 21,
  email: "john456@gmail.com",
};

printUser(user);

// Destructuring Arrays
function printColors([firstColor, secondColor]) {
  console.log(
    `First Color is ${firstColor} and Second Color is ${secondColor}`
  );
}

const colors = ["Red", "Green", "Yellow"];
printColors(colors);

// Destructuring Nested Objects

function printNestedObject({ name, age, address: { city, state } }) {
  console.log(
    `${name} is ${age} years old and lives in ${city}, ${state}`
  );
}

const person = {
  name: "John Doe",
  age: 25,
  address: {
    city: "New York",
    state: "NY",
  },
};

printNestedObject(person); // Output: John Doe is 25 years old and lives in New York, NY 

// Destructuring Nested Arrays

function printNestedArray([first, [second, third]]) {
  console.log(`First: ${first}, Second: ${second}, Third: ${third}`);
}

const nestedArray = [1, [2, 3], 4];
printNestedArray(nestedArray); // Output: First: 1, Second: 2, Third: 3

