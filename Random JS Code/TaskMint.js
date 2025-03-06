const readline = require('readline');

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

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const taskManager = new TaskManager();

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
    while (true) {
        const name = await askQuestion('Enter task name: ');
        const deadline = await askQuestion('Enter task deadline (YYYY-MM-DD): ');

        taskManager.addTask(name, deadline);

        const moreTasks = await askQuestion('Do you want to add more tasks? (yes/no): ');
        if (moreTasks.toLowerCase() !== 'yes') {
            break;
        }
    }

    console.log("All Tasks:", taskManager.getTasks());
    console.log("Pending Tasks:", taskManager.getPendingTasks());
    console.log("Completed Tasks:", taskManager.getCompletedTasks());

    const completeTask = await askQuestion('Do you want to mark any task as completed? (yes/no): ');
    if (completeTask.toLowerCase() === 'yes') {
        const taskIndex = await askQuestion('Enter the index of the task to mark as completed: ');
        taskManager.getTasks()[parseInt(taskIndex)].markAsCompleted();
    }

    console.log("Pending Tasks after completion:", taskManager.getPendingTasks());
    console.log("Completed Tasks after completion:", taskManager.getCompletedTasks());

    rl.close();
}

main();
