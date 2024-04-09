const name = "Shoaib";
const repoCount = 50;

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Shoaib-kh-commits");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "   Shoaib    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Shoaib.com/Shoaib%20Khan/commits";

console.log(url.replace("%20", "-"));

console.log(url.includes("John"));

console.log(gameName.split("-"));

console.log(gameName.concat(" ", "Shoaib"));

console.log(gameName.startsWith("Shoaib")); // true

console.log(gameName.endsWith("Shoaib")); // false

console.log(gameName.repeat(2)); // Shoaib-kh-commitsShoaib-kh-commits

console.log(gameName.search("kh")); // 6

console.log(gameName.match("kh")); // [ 'kh', index: 6, input: 'Shoaib-kh-commits', groups: undefined ]

console.log(gameName.match(/kh/g)); // [ 'kh' ]

console.log(gameName.match(/kh/gi)); // [ 'kh', 'kh' ]

console.log(gameName.match(/kh/gi).length); // 2

console.log(gameName.match(/kh/gi).join(" ")); // kh kh

console.log(gameName.match(/kh/gi).reverse()); // [ 'kh', 'kh' ]

console.log(gameName.match(/kh/gi).reverse().join(" ")); // kh kh

console.log(gameName.match(/kh/gi).reverse().join(" ").toUpperCase()); // KH KH

console.log(
  gameName.match(/kh/gi).reverse().join(" ").toUpperCase().split(" ")
); // [ 'KH', 'KH' ]

console.log(
  gameName.match(/kh/gi).reverse().join(" ").toUpperCase().split(" ").join("")
); // KHKH

console.log(
  gameName
    .match(/kh/gi)
    .reverse()
    .join(" ")
    .toUpperCase()
    .split(" ")
    .join("")
    .repeat(2)
); // KHKHKHKH
