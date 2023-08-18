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
