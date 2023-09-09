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
console.log(pen1); // Output - > pen {name: 'Marker', color: 'Blue', price: '1$'}

// Example - > 4
class Chair {
  constructor(
    color,
    seatHeight,
    recliningAngle,
    backSupport,
    headSupport,
    padding,
    armRests,
    seatSize,
    isHeightAdjustable,
    isMovable
  ) {
    this.color = color;
    this.seatHeight = seatHeight;
    this.recliningAngle = recliningAngle;
    this.backSupport = backSupport;
    this.headSupport = headSupport;
    this.padding = padding;
    this.armRests = armRests;
    this.seatSize = seatSize;
    this.isHeightAdjustable = isHeightAdjustable;
    this.isMovable = isMovable;
  }

  adjustableHeight() {}
  adjustAngle() {}
  moveChair() {}
}

const newChair = new Chair(
  "Blue",
  "25 inch",
  "20 deg",
  true,
  false,
  "3 inch",
  true,
  "16 inch",
  false,
  false
);

console.dir("Chair Prototype", Chair);
console.log("Chair Object", newChair);

// Example - > 5
class OfficeChair extends Chair {
  constructor(color, isHeightAdjustable, seatHeight, recliningAngle) {
    super();
    this.type = "Office Chair";
    this.color = color;
    this.isHeightAdjustable = isHeightAdjustable;
    this.seatHeight = seatHeight;
    this.recliningAngle = recliningAngle;
    this.isMovable = true;
  }

  adjustableHeight(height) {
    if (height > this.seatHeight) {
      console.log(`Chair height changed to ${height}`);
    } else {
      console.log(
        `Height cannot be decreased more than the seat height ${this.seatHeight}`
      );
    }
  }

  adjustAngle(angle) {
    if (angle >= this.recliningAngle) {
      console.log(`Chair angle changed to ${angle}`);
    } else {
      console.log(
        `Angle cannot be decreased more than the min reclining angle ${this.recliningAngle}`
      );
    }
  }

  moveChair(x, y) {
    console.log(`Chair moved to co-ordinates = (${x}, ${y})`);
  }
}

const newOfficeChair = new OfficeChair("Red", true, 30, 30);

console.log(newOfficeChair.adjustableHeight(31));
console.log(newOfficeChair.adjustAngle(40));
console.log(newOfficeChair.moveChair(10, 20));