const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  "Enter your name: ",
  "Enter your course: ",
  "Enter your email: ",
  "Enter your address: ",
  "Enter your college name: ",
  "Enter your CGPA: ",
];

const answers = {};

const askQuestion = (index) => {
  rl.question(questions[index], (answer) => {
    answers[questions[index]] = answer;
    if (index < questions.length - 1) {
      askQuestion(index + 1);
    } else {
      console.table(answers);
      rl.close();
    }
  });
};

askQuestion(0);
