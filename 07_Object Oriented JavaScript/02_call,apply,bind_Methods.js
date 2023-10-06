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

/////////------FreeCodeCamp Examples--------\\\\\\\\\

// Example - > 1 : Call Method
function car(type, fuelType) {
  this.type = type;
  this.fuelType = fuelType;
}

function setBrand(brand) {
  car.call(this, "Convertivle", "Petrol");
  this.brand = brand;
  console.log(`Car Details = `, this);
}

function definePrice(price) {
  car.call(this, "Convertivle", "Diesel");
  this.price = price;
  console.log(`Car Details = `, this);
}

const newBrand = new setBrand(`Brand1`);
const newCarPrice = new definePrice(100000);

// Example - > 2 : apply() function
function Car(type, fuelType) {
  this.type = type;
  this.fuelType = fuelType;
}

function setBrand(brand) {
  Car.apply(this, ["convertible", "petrol"]); //Syntax with array literal
  this.brand = brand;
  console.log(`Car details = `, this);
}

function definePrice(price) {
  Car.apply(this, new Array("convertible", "diesel")); //Syntax with array object construction
  this.price = price;
  console.log(`Car details = `, this);
}

const newBrand1 = new setBrand("Brand1");
const newCarPrice1 = new definePrice(100000);


// Example - > 3 : call() Function
function test(arg1, arg2){
  console.log(this.num, arg1, arg2); // 100, 10, 20
}

test.call({num: 100}, 10, 20);