class Task {
  constructor(name, deadline) {
    this.name = name;
    this.deadline = deadline;
    this.completed = false;
  }

  markAsCompleted() {
    this.completed = true;
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

  getTasks() {
    return this.tasks;
  }

  getPendingTasks() {
    return this.tasks.filter((task) => !task.completed);
  }

  getCompletedTasks() {
    return this.tasks.filter((task) => task.completed);
  }
}

// Example usage:
const taskManager = new TaskManager();
taskManager.addTask("Complete project report", "2023-10-15");
taskManager.addTask("Buy groceries", "2023-10-10");

console.log("All Tasks:", taskManager.getTasks());
console.log("Pending Tasks:", taskManager.getPendingTasks());
console.log("Completed Tasks:", taskManager.getCompletedTasks());
