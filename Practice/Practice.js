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
            console.log("Details:");
            console.log("----------------------------------");
            console.log("| Name     |", name);
            console.log("| Course   |", course);
            console.log("| Email    |", email);
            console.log("| Address  |", address);
            console.log("| College  |", college);
            console.log("| CGPA     |", cgpa);
            console.log("----------------------------------");
            rl.close();
          });
        });
      });
    });
  });
});
