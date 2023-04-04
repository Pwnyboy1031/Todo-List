import { Project } from "./project"
import {toDo} from "./toDo"
import { updateSidebar } from "./dom";

let myProjects = []; 

function init(defaultProjects) {
    let defaultProject = new Project("Daily", "Your daily To-do list.");
    console.log(defaultProject);
    let toDo1 = new toDo("Walk the dog", "Take fido for a walk", "March 5", "Urgent");
    console.log(toDo1);
    defaultProject.list.push(toDo1);
    myProjects.push(defaultProject);
    console.log(defaultProject);
    updateSidebar();
}


init(myProjects);

export {myProjects}