// Example - > 1 : Cloning Object
const originalObject = { a: 1, b: 2, c: 3 };
const clonedObject = Object.assign({}, originalObject);
console.log(clonedObject);

// Example - > 2 : Merging Object
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObject = Object.assign({}, obj1, obj2);
console.log(mergedObject);

// Example - > 3 :Modifiying The Cloned Object Doesn't Affetc The Original Object
const personObj = { Name: "Shoaib", Course: "CSE" };
const clonedPersonObj = Object.assign({}, personObj);
clonedPersonObj.Name = "Aman";
console.log(personObj);
console.log(clonedPersonObj);

// Example - > 4 : Cloning an Object with Nested Objects (Shallow Clone):
const originalUser = {
  username: "jsmith",
  info: {
    email: "jsmith@example.com",
    isAdmin: false,
  },
};

const clonedUser = Object.assign({}, originalUser);
clonedUser.info.email = "abc@gmail.com";
console.log(clonedUser.info.email);
