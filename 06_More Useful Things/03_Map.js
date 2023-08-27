// Creating a Map
const myMap = new Map();

// Adding Entries
myMap.set("Name", "Shoaib");
myMap.set("Course", "CSE");

// Getting Values
console.log(myMap.get("Name")); // Shoaib
console.log(myMap.get("Course")); // CSE

// Checking Existence
console.log(myMap.has("Name")); // true
console.log(myMap.has("age")); // fasle

// Deleting Entries
myMap.delete(`Course`);
console.log(myMap.get("Course")); // undefind
console.log(myMap.has("Course")); // fasle

// Iterating through a Map
myMap.forEach((value, key) => {
  console.log(`${key} : ${value}`); // Name : Shoaib
});

for (const key of myMap.keys()) {
  console.log(key); // Name
}

for (const value of myMap.values()) {
  console.log(value); // Shoaib
}

for (const [key, value] of myMap.entries()) {
  console.log(`${key} : ${value}`); // Name : Shoaib
}

// Size of Map()
console.log(myMap.size);  // 1
