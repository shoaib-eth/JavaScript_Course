// Example - > 1 : Creating a Map
const myMap = new Map();

// Example - > 2 : Adding Entries
myMap.set("Name", "Shoaib");
myMap.set("Course", "CSE");

// Example - > 3 : Getting Values
console.log(myMap.get("Name")); // Shoaib
console.log(myMap.get("Course")); // CSE

// Example - > 4 : Checking Existence
console.log(myMap.has("Name")); // true
console.log(myMap.has("age")); // fasle

// Example - > 5 : Deleting Entries
myMap.delete(`Course`);
console.log(myMap.get("Course")); // undefind
console.log(myMap.has("Course")); // fasle

// Example - > 6 : Iterating through a Map
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

// Example - > 7 : Size of Map()
console.log(myMap.size);  // 1

// Example - > 8 : Clearing a Map

myMap.clear();
console.log(myMap.size); // 0

// Example - > 9 : Completely delete a Map() Variable

const emptyMap = new Map();
console.log(emptyMap); // Map(0) {size: 0}

emptyMap.set("Hello", "World");

console.log(emptyMap); // Map(1) {"Hello" => "World"}

emptyMap.clear();
console.log(emptyMap); // Map(0) {size: 0}

delete emptyMap;

console.log(emptyMap); // ReferenceError: emptyMap is not defined

// Example - > 10 : Converting a Map to an Array

const myMapArray = Array.from(myMap);
console.log(myMapArray); // []

// Example - > 11 : Initializing a Map with Initial Values