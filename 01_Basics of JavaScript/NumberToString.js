let num = 10;

console.log("Before Converting No. Str : ", typeof num);

let str = num.toString();

console.log(str);
console.log("After Convert No. to str : ", typeof str);

// Using string() function
let num1 = 20;
let str1 = String(num1);
console.log(typeof str1);

// Using Template Literals
let num2 = 30;
let str2 = `${num2}`;
console.log(typeof str2);
