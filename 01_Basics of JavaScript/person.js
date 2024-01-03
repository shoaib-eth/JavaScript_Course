const Person = {
  name: "John",
  age: 30,
  gender: "male",
  occupation: "developer",
  location: "New York",
};

function accessPersonValues() {
  console.log(Person.name);
  console.log(Person.age);
  console.log(Person.gender);
  console.log(Person.occupation);
  console.log(Person.location);
}

accessPersonValues();
// Output:
// John
// 30
// male
// developer
// New York


Person.email = "john@example.com";
