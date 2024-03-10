// Example 1

var arr = [1, 2, 3, 4, 5];
arr.shift(); // 1

console.log(arr); // [2, 3, 4, 5]

// Example 2

var arr = [1, 2, 3, 4, 5];
arr.unshift(0); // 6

console.log(arr); // [0, 1, 2, 3, 4, 5]

// Example 3

var arr = [1, 2, 3, 4, 5];
arr.unshift(-2, -1, 0); // 8

console.log(arr); // [-2, -1, 0, 1, 2, 3, 4, 5]
