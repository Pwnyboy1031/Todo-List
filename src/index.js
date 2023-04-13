import { Project, projectDictionary } from "./project"
import {toDo} from "./toDo"
import { updateSidebar,displayTodoInput,addTodoButton, newProjectBtn, displayProjectInput } from "./dom";
import { mainLoad, initMain } from "./mainLoad";

function init() {
    if (localStorage.getItem("projectData") === null) {
        const defaultProjects = [
            new Project("Daily", "Your daily To-do list."),
            new Project("Groceries", "Shopping List for the week", []),
        ];
        defaultProjects.forEach((project => {
            const projectInstance = new Project(project.title, project.description, project.list);
            projectInstance.addProjectToDictionary();
        }));
        initMain();
    } else {
        const storedData = JSON.parse(localStorage.getItem("projectData"));
        const projects = Object.values(storedData).map(data => new Project(data.title,data.description,data.list));
        projects.forEach(project => project.addProjectToDictionary());
        updateSidebar();
        document.querySelector(".project").classList.add("selected");
        mainLoad();
    }
    updateSidebar();
    document.querySelector(".project").classList.add("selected");
}

// create a new project and add it to the dictionary
function createNewProject(title) {
    const newProject = new Project(title, "", []);
    newProject.addProjectToDictionary();
    localStorage.setItem("projectData", JSON.stringify(projectDictionary));
    updateSidebar();
    document.querySelector("#projectTitle").value = "";

}

// create a new to do and add it to projects
function createNewTodo(title, dueDate, description) {
    const newToDo = new toDo(title, dueDate, description);
    console.log(newToDo);
    // this needs to add new todo to project based on the selected h2
    const projectName = document.querySelector(".selected").textContent;
    const workingProject = projectDictionary[projectName];
    workingProject.addToDo(newToDo);
    localStorage.setItem("projectData", JSON.stringify(projectDictionary));
};


// display new todo input
addTodoButton.addEventListener("click", (e) => {
    const sidebarProjects = document.querySelectorAll('.project');
    let selectedProject = null;
    for (let i = 0; i < sidebarProjects.length; i++) {
        if (sidebarProjects[i].classList.contains('selected')) {
          selectedProject = sidebarProjects[i];
          break;
        }
      }
      
      if (!selectedProject) {
        alert('No project selected!');
        throw new Error('No project selected!');
        
      }
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

    // load main
    mainLoad();
    }
})

newProjectBtn.addEventListener("click", (e) => {
    displayProjectInput();
});

init();


export {createNewTodo, createNewProject}