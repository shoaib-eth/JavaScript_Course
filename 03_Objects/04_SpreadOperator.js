// Copying peoperties from one object to another
const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};

const Copiedobj = { ...obj1 };

console.log(Copiedobj);

// Merging Multiple Objects
const obj2 = { d: 4, e: 5, f: 6 };
const obj3 = { g: 7, h: 8, i: 9 };
const obj4 = { j: 10, k: 11, l: 12 };
const mergedObjects = { ...obj1, ...obj2, ...obj3, ...obj4 };

console.log(mergedObjects);

// Adding new properties
const person = {
  name: "Shoiab",
  email: "shoaib@email.com",
};
const newObject = { ...person, Branch: "CSE" };

console.log(newObject);
