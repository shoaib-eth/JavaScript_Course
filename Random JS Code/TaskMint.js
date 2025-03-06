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

// Mark a task as completed
taskManager.getTasks()[0].markAsCompleted();

console.log("Pending Tasks after completion:", taskManager.getPendingTasks());
console.log(
  "Completed Tasks after completion:",
  taskManager.getCompletedTasks()
);
