import { format } from "date-fns";
import {  createNewTodo, createNewProject } from "./index.js";
import { projectDictionary } from "./project.js";
import { mainLoad } from "./mainLoad.js";

// find layout
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const main = document.getElementById("main");
const addTodoButton = document.createElement("button");
const submitBtn = document.createElement("button");
const projectSubmit = document.createElement("button");
addTodoButton.setAttribute("id", "addTodo");
addTodoButton.innerText = "+";
document.body.appendChild(addTodoButton);
const newProjectBtn = document.createElement("button");
newProjectBtn.setAttribute("id", "newProject");
newProjectBtn.innerText = "New Project";
const titleInput = document.createElement("input");
const descriptionInput = document.createElement("textarea");
const dueDateInput = document.createElement("input");

function updateSidebar() {
    const sidebar = document.querySelector("#sidebar");
    sidebar.innerHTML = "";
    const projectList = document.createElement("ul");

    for (const projectTitle in projectDictionary) {
        const project = projectDictionary[projectTitle];
        const listItem = document.createElement("li");
        listItem.textContent = projectTitle;
        listItem.setAttribute("class", "project")
        projectList.appendChild(listItem);
    }

    sidebar.appendChild(projectList);
    
    sidebar.appendChild(newProjectBtn);
};

function displayTodoInput() {
    // display form with overlay
    overlay.style.display = "flex";
    const form = document.createElement("form");
    form.setAttribute("id", "newTodoForm");

    // title
    const lblTitle = document.createElement("label");
    lblTitle.innerText = "Title";
    
    titleInput.setAttribute("id", "todoTitle");

    // description
    const lblDescription = document.createElement("label");
    lblDescription.innerText = "Description";
    
    descriptionInput.style.height = "10vh";
    descriptionInput.setAttribute("id", "todoDescription");

    // due date
    const lblDue = document.createElement("label");
    lblDue.innerText = "Due Date";
    
    dueDateInput.setAttribute("type", "date");
    dueDateInput.setAttribute("id", "todoDueDate");

    // submit
   
    submitBtn.innerText = "Create Task";
    
    

    form.appendChild(lblTitle);
    form.appendChild(titleInput);
    form.appendChild(lblDue);
    form.appendChild(dueDateInput);
    form.appendChild(lblDescription);
    form.appendChild(descriptionInput);
    form.appendChild(submitBtn);
    
    overlay.appendChild(form);

    
};

function displayProjectInput() {
    // display form with overlay
    overlay.style.display = "flex";
    const form = document.createElement("form");
    form.setAttribute("id", "newProjectForm");

    // title
    const lblTitle = document.createElement("label");
    lblTitle.innerText = "Title";
    
    titleInput.setAttribute("id", "projectTitle");

    // submit
    projectSubmit.innerText = "Create Project";

    form.appendChild(lblTitle);
    form.appendChild(titleInput);
    form.appendChild(projectSubmit);
    
    overlay.appendChild(form);
    
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const title = document.querySelector("#todoTitle").value;
    let dueDate = document.querySelector("#todoDueDate").value;
    if (dueDate === "" ){
        alert("Please input a due date.");
        return;
    }
    const description = document.querySelector("#todoDescription").value;

    dueDate = format(new Date(dueDate), 'eeee, MMMM do');

    createNewTodo(title, dueDate, description);
    
    // clear input values, hide overlay
    document.querySelector("#todoTitle").value = "";
    document.querySelector("#todoDueDate").value = "";
    document.querySelector("#todoDescription").value = "";
    overlay.style.display = "none";
    mainLoad();
});

projectSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    const projectTitle = document.getElementById("projectTitle").value;
    createNewProject(projectTitle);

    // clear input values, hide overlay
    overlay.style.display = "none";
    document.getElementById("projectTitle").value = "";
})

export {updateSidebar, displayTodoInput, displayProjectInput, sidebar, addTodoButton, newProjectBtn}
