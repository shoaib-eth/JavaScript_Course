let day = parseInt(prompt("Enter Number Between 1 to 7"));

switch (day) {
  case 1:
    console.log("It's Monday");
    break;

  case 2:
    console.log("It's Tuesday");
    break;

  case 3:
    console.log("It's Wednesday");
    break;

  case 4:
    console.log("It's Thursday");
    break;

  case 5:
    console.log("It's Friday");
    break;

  case 6:
    console.log("It's Saturday");
    break;

  case 7:
    console.log("It's Sunday");
    break;

  default:
    console.log("Enter Number between 1 to 5 only");
}


// Another Example of Switch Case
let fruit = prompt("Enter a fruit");

switch (fruit.toLowerCase()) {
  case "apple":
    console.log("It's an apple");
    break;

  case "banana":
    console.log("It's a banana");
    break;

  case "orange":
    console.log("It's an orange");
    break;

  case "grape":
    console.log("It's a grape");
    break;

  default:
    console.log("Unknown fruit");
}
