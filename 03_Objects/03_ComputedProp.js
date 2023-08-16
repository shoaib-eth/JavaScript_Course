const propertyName = "color";
const propertyValue = "blue";

const obj = {
  [propertyName]: propertyValue,
};

console.log(obj.color); // Output - > blue

// Another Examples
const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

const obj1 = {
  [key1]: value1,
  [key2]: value2,
};

console.log(obj1);

// Another Example
function getPropertyKey() {
  return "name";
}

const obj2 = {
  [getPropertyKey()]: "Shoaib",
};

console.log(obj2.name);
