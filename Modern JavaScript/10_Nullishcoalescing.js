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
let firstName = null;
let lastName = null;
let nickName = "SuperCoder";

alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // SuperCoder
