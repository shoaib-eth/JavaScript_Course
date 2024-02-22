// Callback function
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function showOk() {
    alert("You agreed.");
  },
  function showCancel() {
    alert("You canceled the execution.");
  }
);
// Do you agree? -> ok -> You agreed.
// Do you agree? -> cancel -> You canceled the execution.
