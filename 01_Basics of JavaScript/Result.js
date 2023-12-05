// Function to calculate total marks
function calculateTotalMarks(subjects) {
    let totalMarks = 0;
    for (let subject in subjects) {
        if (subjects.hasOwnProperty(subject)) {
            totalMarks += subjects[subject];
        }
    }
    return totalMarks;
}

// Function to calculate percentage
function calculatePercentage(totalMarks) {
    return (totalMarks / 500) * 100;
}

// Function to generate division
function generateDivision(percentage) {
  if (percentage >= 75) {
    return "Distinction";
  } else if (percentage >= 60) {
    return "First Division";
  } else if (percentage >= 45) {
    return "Second Division";
  } else if (percentage >= 33) {
    return "Third Division";
  } else {
    return "Fail";
  }
}

// Function to generate dictinctions
function generateDictinctions(subjects) {
  let dictinctions = [];
  for (let subject in subjects) {
    if (subjects[subject] > 75) {
      dictinctions.push(subject);
    }
  }
  return dictinctions;
}

// Function to display result in a formatted way
function displayResult(subjects) {
  let totalMarks = calculateTotalMarks(subjects);
  let percentage = calculatePercentage(totalMarks);
  let division = generateDivision(percentage);
  let dictinctions = generateDictinctions(subjects);

  console.log("Subject\t\tMarks");
  console.log("----------------------");
  for (let subject in subjects) {
    console.log(`${subject}\t\t${subjects[subject]}`);
  }
  console.log("----------------------");
  console.log(`Total Marks:\t${totalMarks}`);
  console.log(`Percentage:\t${percentage.toFixed(2)}%`);
  console.log(`Division:\t${division}`);
  console.log(
    "Dictinctions:\t" +
      (dictinctions.length > 0 ? dictinctions.join(", ") : "None")
  );
}

// Test case
let subjects = {};

subjects.Physics = parseInt(prompt("Enter Physics marks:"));
subjects.Chemistry = parseInt(prompt("Enter Chemistry marks:"));
subjects.Maths = parseInt(prompt("Enter Maths marks:"));
subjects.Computer = parseInt(prompt("Enter Computer marks:"));
subjects["Major Project"] = parseInt(prompt("Enter Major Project marks:"));

displayResult(subjects);
function calculateTotalMarks(subjects) {
  let totalMarks = 0;
  for (let subject in subjects) {
    totalMarks += subjects[subject];
  }
  return totalMarks;
}

// Function to calculate percentage.
function calculatePercentage(totalMarks) {
  return (totalMarks / 500) * 100;
}

// Function to generate division
function generateDivision(percentage) {
  if (percentage >= 75) {
    return "Distinction";
  } else if (percentage >= 60) {
    return "First Division";
  } else if (percentage >= 45) {
    return "Second Division";
  } else if (percentage >= 33) {
    return "Third Division";
  } else {
    return "Fail";
  }
}

// Function to generate dictitions
function generateDictinctions(subjects) {
  let dictinctions = [];
  for (let subject in subjects) {
    if (subjects[subject] > 75) {
      dictinctions.push(subject);
    }
  }
  return dictinctions;
}

// Function to display result in a formatted way
function displayResult(subjects) {
  let totalMarks = calculateTotalMarks(subjects);
  let percentage = calculatePercentage(totalMarks);
  let division = generateDivision(percentage);
  let dictinctions = generateDictinctions(subjects);

  console.log("Subject\t\tMarks");
  console.log("----------------------");
  for (let subject in subjects) {
    console.log(`${subject}\t\t${subjects[subject]}`);
  }
  console.log("----------------------");
  console.log(`Total Marks:\t${totalMarks}`);
  console.log(`Percentage:\t${percentage.toFixed(2)}%`);
  console.log(`Division:\t${division}`);
  console.log(
    "Dictinctions:\t" +
      (dictinctions.length > 0 ? dictinctions.join(", ") : "None")
  );
}

// Test case
let subjects = {
  Physics: 85,
  Chemistry: 90,
  Maths: 80,
  Computer: 95,
  "Major Project": 75,
};

displayResult(subjects);
