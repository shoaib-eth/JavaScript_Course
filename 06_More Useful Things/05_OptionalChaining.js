// Accessing a deeply nested property
const person = {
  name: "Alice",
  address: {
    city: "Wonderland",
  },
};

const cityName = person?.address?.city;
console.log(cityName); // Wonderland

const StreetName = person?.address?.street;
console.log(StreetName); // undefind

// Accessing an array element with Oprtional Chainging
const myArray = [1, 2, 3, 4, 5];

const index0 = myArray?.[0];
console.log(index0); // 1

const index7 = myArray?.[7];
console.log(index7); // undefind
