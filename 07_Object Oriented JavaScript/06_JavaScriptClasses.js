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
console.log(user1); // Output - > createUser {firstName: 'Shoaib', lastName: 'Khan', email: 'Shoaib@email.com', age: 2, address: 'My Address'}

// Example - > 2
class Student {
  constructor(firstNameInput, lastNameInput, ageInput, rollNoInput) {
    this.firstName = firstNameInput;
    this.lastName = lastNameInput;
    this.age = ageInput;
    this.rollNo = rollNoInput;
  }

  name() {
    return `The student's name is ${firstNameInput} ${lastNameInput}`;
  }
}

const Student1 = new Student("Alice", "John", 12, 123);
console.log(Student1); // Output - > Student {firstName: 'Alice', lastName: 'John', age: 12, rollNo: 123}

// Example - > 3
class pen {
  constructor(name, color, price) {
    this.name = name;
    this.color = color;
    this.price = price;
  }
  showPrice() {
    return `Price of ${this.name} is ${this.price}`;
  }
}

const pen1 = new pen("Marker", "Blue", "1$");
console.log(pen1);
