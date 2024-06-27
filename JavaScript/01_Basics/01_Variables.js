const userId = 29240;
let userEmail = "shoaib@google.com";
var userPassword = "Shoaib@123";
userCity = "Gwalior";
let userState;

/*
userId = 12345; // Error: Assignment to constant variable. 
This is not allowed because userId is a constant variable and its value can't be changed.
*/ 

// Values can be changed for let and var variables.
userEmail = "shoaib@gmail.com";
userPassword = "6872";
userCity = "Indore";
userState = "Madhya Pradesh";

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

// Printing the values of the variables.
console.table({ userId, userEmail, userPassword, userCity, userState });

// Output
/*
┌──────────────┬────────────────────┐
│   (index)    │       Values       │
├──────────────┼────────────────────┤
│    userId    │       29240        │
│  userEmail   │ 'shoaib@gmail.com' │
│ userPassword │       '6872'       │
│   userCity   │      'Indore'      │
│  userState   │  'Madhya Pradesh'  │
└──────────────┴────────────────────┘
*/