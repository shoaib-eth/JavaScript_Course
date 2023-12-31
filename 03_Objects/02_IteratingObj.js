// for-in loop
const obj = { a: 1, b: 2, c: 3 };

for (let key in obj) {
  console.log(key + " : " + obj[key]);
}

// Object.keys() Method
// for-of loop method
const obj1 = { d: 4, e: 5, f: 6 };

for (let key1 of Object.keys(obj1)) {
  console.log(key1 + " : " + obj1[key1]);
}

// Object.entries() Method
const obj2 = { g: 7, h: 8, i: 9 };

for (let [key2, value] of Object.entries(obj2)) {
  console.log(key2 + " : " + value);
}

// Object.values() Method
const obj3 = { j: 10, k: 11, l: 12 };
const values = Object.values(obj3);

for (let value of values) {
  console.log(value);
}


