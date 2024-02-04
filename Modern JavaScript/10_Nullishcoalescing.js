// Comparison with ??

// Example - 1
/*
let user;

alert(user ?? "Anonymous"); // Anonymous
*/

// Example - 2
/*
let user = "John";

alert(user ?? "Anonymous"); // John
*/

// Example - 3
/*
let firstName = null;
let lastName = null;
let nickName = "SuperCoder";

alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // SuperCoder
*/

// Comparison with ||

// Example - 1
let firstName = null;
let lastName = null;
let nickName = "SuperCoder";

alert(firstName || lastName || nickName || "Anonymous"); // SuperCoder

// Example - 2

let height = 0;

alert(height || 100); // 100

alert(height ?? 100); // 0

// Example - 3

let height = null;

alert(height || 100); // 100

alert(height ?? 100); // 100

// Example - 4

let height = 0;

alert(height || 100); // 100

alert(height ?? 100); // 0

// Example - 5

let height = null;

alert(height || 100); // 100

alert(height ?? 100); // 100

// Example - 6

let height = 0;

alert(height || 100); // 100

alert(height ?? 100); // 0

// Example - 7

let height = null;

alert(height || 100); // 100

alert(height ?? 100); // 100
