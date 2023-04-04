import { Project } from "./project"
import {toDo} from "./toDo"
import { updateSidebar } from "./dom";

let myProjects = []; 

function init(defaultProjects) {
    let defaultProject = new Project("Daily", "Your daily To-do list.");
    let defaultGroceries = new Project("Groceries", "Shopping List for the week", null);
    let toDo1 = new toDo("Walk the dog", "Take fido for a walk", "March 5", "Urgent");
    myProjects.push(defaultProject, defaultGroceries);
    console.log(defaultProject);
    updateSidebar();
}


init(myProjects);

export {myProjects}