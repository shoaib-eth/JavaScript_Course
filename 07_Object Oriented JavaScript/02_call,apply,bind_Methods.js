// Example - > 1 : `call` Method
const person = {
  name: "John",
  sayHello: function (greeting) {
    console.log(`${greeting}, ${this.name}`);
  },
};

const anotherPerson = {
  name: "Alice",
};

person.sayHello.call(anotherPerson, "Hi"); // Output - > Hi, Alice

// Example - > 2 : `apply` Method
const person1 = {
  name: "Alice",
  sayHello: function (greeting) {
    console.log(`${greeting}, ${this.name}`);
  },
};

const anotherPerson1 = {
  name: "John",
};

person1.sayHello.apply(anotherPerson1, ["Hello"]); // Output - > Hello, John

// Example - > 3 : `bind` Method
const person2 = {
  name: "Alice",
  sayHello: function (greeting) {
    console.log(`${greeting}, ${this.name}`);
  },
};

const anotherPerson2 = {
  name: "Alice",
};

const greetMessage = person2.sayHello.bind(anotherPerson);
greetMessage("How Are You ?"); // Output - > How Are You ?, Alice
