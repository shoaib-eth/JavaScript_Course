const readline = require("readline");

console.log("Hello, world!");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your name: ", (name) => {
  rl.question("Enter your course: ", (course) => {
    rl.question("Enter your email: ", (email) => {
      rl.question("Enter your address: ", (address) => {
        rl.question("Enter your college name: ", (college) => {
          rl.question("Enter your CGPA: ", (cgpa) => {
            console.table({
              Name: name,
              Course: course,
              Email: email,
              Address: address,
              College: college,
              CGPA: cgpa,
            });
          });
        });
      });
    });
  });
});
