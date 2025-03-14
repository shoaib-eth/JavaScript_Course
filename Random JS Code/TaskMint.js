const readline = require("readline");
const fs = require("fs");

class Task {
  constructor(name, deadline) {
    this.name = name;
    this.deadline = deadline;
    this.completed = false;
    this.createdAt = new Date();
    this.completedAt = null;
  }

  markAsCompleted() {
    this.completed = true;
    this.completedAt = new Date();
    console.log(
      `Task "${
        this.name
      }" added on ${this.createdAt.toLocaleString()} is completed on ${this.completedAt.toLocaleString()}.`
    );
  }

  editTask(name, deadline) {
    this.name = name;
    this.deadline = deadline;
    console.log(`Task updated to: ${this.name}, Deadline: ${this.deadline}`);
  }
}

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(name, deadline) {
    const task = new Task(name, deadline);
    this.tasks.push(task);
  }

  deleteTask(index) {
    this.tasks.splice(index, 1);
  }

  getTasks() {
    return this.tasks;
  }

  getPendingTasks() {
    return this.tasks.filter((task) => !task.completed);
  }

  getCompletedTasks() {
    return this.tasks.filter((task) => task.completed);
  }

  saveTasks() {
    fs.writeFileSync("tasks.json", JSON.stringify(this.tasks, null, 2));
  }

  loadTasks() {
    if (fs.existsSync("tasks.json")) {
      const data = fs.readFileSync("tasks.json");
      const tasks = JSON.parse(data);
      this.tasks = tasks.map((task) => {
        const t = new Task(task.name, task.deadline);
        t.completed = task.completed;
        t.createdAt = new Date(task.createdAt);
        t.completedAt = task.completedAt ? new Date(task.completedAt) : null;
        return t;
      });
    }
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const taskManager = new TaskManager();
taskManager.loadTasks();

function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

/**
 * Main function to manage tasks.
 * Continuously prompts the user to choose an action until 'exit' is selected.
 * Actions include adding, editing, deleting, viewing, and completing tasks.
 * After each action, tasks are saved and the current state of all tasks is logged.
 *
 * @async
 * @function main
 * @returns {Promise<void>} - Resolves when the user chooses to exit.
 *
 * @example
 * // To start the task manager, simply call the main function:
 * main();
 *
 * @description
 * This function uses a while loop to continuously prompt the user for an action.
 * Depending on the action chosen, it performs the corresponding task management operation:
 * - 'add': Prompts for task name and deadline, then adds the task.
 * - 'edit': Prompts for task index, new name, and new deadline, then edits the task.
 * - 'delete': Prompts for task index, then deletes the task.
 * - 'view': Prompts for task index, then displays the task details.
 * - 'complete': Prompts for task index, then marks the task as completed.
 * - 'exit': Breaks the loop and exits the function.
 *
 * After each action, the function saves the tasks and logs the current state of all tasks,
 * pending tasks, and completed tasks.
 */
async function main() {
  while (true) {
    const action = await askQuestion(
      "Choose an action: add, edit, delete, view, complete, exit: "
    );

    if (action === "add") {
      const name = await askQuestion("Enter task name: ");
      const deadline = await askQuestion("Enter task deadline (YYYY-MM-DD): ");
      taskManager.addTask(name, deadline);
    } else if (action === "edit") {
      const index = await askQuestion("Enter the index of the task to edit: ");
      const name = await askQuestion("Enter new task name: ");
      const deadline = await askQuestion(
        "Enter new task deadline (YYYY-MM-DD): "
      );
      taskManager.getTasks()[parseInt(index)].editTask(name, deadline);
    } else if (action === "delete") {
      const index = await askQuestion(
        "Enter the index of the task to delete: "
      );
      taskManager.deleteTask(parseInt(index));
    } else if (action === "view") {
      const index = await askQuestion("Enter the index of the task to view: ");
      const task = taskManager.getTasks()[parseInt(index)];
      console.log(
        `Task: ${task.name}, Deadline: ${task.deadline}, Completed: ${task.completed}`
      );
    } else if (action === "complete") {
      const index = await askQuestion(
        "Enter the index of the task to mark as completed: "
      );
      taskManager.getTasks()[parseInt(index)].markAsCompleted();
    } else if (action === "exit") {
      break;
    }

    taskManager.saveTasks();
    console.log("All Tasks:", taskManager.getTasks());
    console.log("Pending Tasks:", taskManager.getPendingTasks());
    console.log("Completed Tasks:", taskManager.getCompletedTasks());
  }

  rl.close();
}

main();
