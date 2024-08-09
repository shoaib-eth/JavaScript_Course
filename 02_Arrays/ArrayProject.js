// Create an array to store project data
const projects = [];

// Function to add a new project to the array
function addProject(name, description, status) {
    const project = {
        name: name,
        description: description,
        status: status
    };
    projects.push(project);
}

// Function to display all projects
function displayProjects() {
    projects.forEach(project => {
        console.log(`Name: ${project.name}`);
        console.log(`Description: ${project.description}`);
        console.log(`Status: ${project.status}`);
        console.log('------------------------');
    });
}

// Example usage
addProject('Project 1', 'This is the first project', 'In progress');
addProject('Project 2', 'This is the second project', 'Completed');
// Displaying a creative message before displaying projects
console.log('Welcome to the Project Showcase!');
console.log('------------------------');

// Displaying all projects
displayProjects();

// Displaying a creative message after displaying projects
console.log('------------------------');
console.log('Thank you for visiting the Project Showcase!');