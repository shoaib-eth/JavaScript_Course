// Callback function
function ask(question, yes, no) {
  if (confirm(question)) {
    yes();
  } else {
    no();
  }
}

function showOk() {
  alert("You agreed.");
}

function showCancel() {
  alert("You canceled the execution.");
}

// usage: functions showOk, showCancel are passed as arguments to ask function 
ask("Do you agree?", showOk, showCancel);
// Do you agree? -> ok -> You agreed.
// Do you agree? -> cancel -> You canceled the execution.