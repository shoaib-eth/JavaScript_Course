// Example - > 1
class createUser {
  constructor(firstName, lastName, email, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
  }
  about() {
    return `${this.firstName} is ${this.age} years old`;
  }
  is18() {
    return this.age >= 18;
  }
}

const user1 = new createUser(
  "Shoaib",
  "Khan",
  "Shoaib@email.com",
  2,
  "My Address"
);
console.log(Object.getPrototypeOf(user1));
