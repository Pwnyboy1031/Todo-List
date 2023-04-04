import { Project } from "./project"
import {toDo} from "./toDo"

console.log("Hello World")

function init() {
    let defaultList = new Project("Daily", "Your daily To-do list.");
    console.log(defaultList);
    let toDo1 = new toDo("Walk the dog", "Take fido for a walk", "March 5", "Urgent");
    console.log(toDo1);
    defaultList.list.push(toDo1);
    console.log(defaultList);
}


init();