import { Project } from "./project"
import {toDo} from "./toDo"
import { updateSidebar,displayTodoInput,addTodoButton } from "./dom";

let myProjects = []; 



function init(defaultProjects) {
    let defaultProject = new Project("Daily", "Your daily To-do list.");
    let defaultGroceries = new Project("Groceries", "Shopping List for the week", null);
    let toDo1 = new toDo("Walk the dog", "Take fido for a walk", "March 5", "Urgent");
    myProjects.push(defaultProject, defaultGroceries);
    console.log(defaultProject);
    updateSidebar();
 
}

function newTodo() {

};

// add new todo
addTodoButton.addEventListener("click", (e) => {
    displayTodoInput();
});

sidebar.addEventListener("click", (e) => {
    let projects = document.querySelectorAll(".project");
    // remove selected  from all other projects elements
    projects.forEach(project => {
        project.classList.remove("selected");
    })

    // add selected class to target
    e.target.classList.add("selected");
})

init(myProjects);

export {myProjects}