import { Project, projectDictionary } from "./project"
import {toDo} from "./toDo"
import { updateSidebar,displayTodoInput,addTodoButton, newProjectBtn, displayProjectInput } from "./dom";


function init() {
    const defaultProjects = [
        new Project("Daily", "Your daily To-do list."),
        new Project("Groceries", "Shopping List for the week", []),
    ];
    defaultProjects.forEach((project => {
        const projectInstance = new Project(project.title, project.description, project.list);
        projectInstance.addProjectToDictionary();
    }));
    updateSidebar();
}

// create a new project and add it to the dictionary
function createNewProject(title) {
    const newProject = new Project(title, "", []);
    newProject.addProjectToDictionary();
    console.log(projectDictionary);
    updateSidebar();
    document.querySelector("#projectTitle").value = "";

}

// create a new to do and add it to projects
function createNewTodo(title, dueDate, description) {
    const newToDo = new toDo(title, dueDate, description);

    // this needs to add new todo to project based on the selected h2
    const projectName = document.querySelector(".selected").textContent;
    const workingProject = projectDictionary[projectName];
    console.log(workingProject);
    workingProject.addToDo(newToDo);
};


// display new todo input
addTodoButton.addEventListener("click", (e) => {
    displayTodoInput();
});

sidebar.addEventListener("click", (e) => {
    if (e.target.classList.contains("project")) {
        let projects = document.querySelectorAll(".project");
    // remove selected  from all other projects elements
    projects.forEach(project => {
        project.classList.remove("selected");
    })

    // add selected class to target
    e.target.classList.add("selected");
    }
    
})

newProjectBtn.addEventListener("click", (e) => {
    displayProjectInput();
});

init();

export {createNewTodo, createNewProject}