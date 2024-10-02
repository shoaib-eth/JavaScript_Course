document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTaskButton");
  const taskList = document.getElementById("taskList");

  addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const taskItem = document.createElement("li");
      const taskCheckbox = document.createElement("input");
      taskCheckbox.type = "checkbox";
      taskCheckbox.addEventListener("change", () => {
        if (taskCheckbox.checked) {
          taskItem.classList.add("completed");
          alert("Task Completed");
        } else {
          taskItem.classList.remove("completed");
        }
      });

      taskItem.appendChild(taskCheckbox);
      taskItem.appendChild(document.createTextNode(taskText));
      taskList.appendChild(taskItem);
      taskInput.value = "";
    }
  });
});
