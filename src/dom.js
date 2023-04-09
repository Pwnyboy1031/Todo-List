import { add } from "date-fns";
import { Project, myProjects, createNewTodo } from "./index.js";

// find layout
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const main = document.getElementById("main");
const addTodoButton = document.createElement("button");
const submitBtn = document.createElement("button");
addTodoButton.setAttribute("id", "addTodo");
addTodoButton.innerText = "+";
main.appendChild(addTodoButton);



function updateSidebar() {
    for (let i = 0; i < myProjects.length; i++) {
        let project = document.createElement("h2");
        project.setAttribute("id", myProjects[i].title);
        project.setAttribute("class", "project")
        project.innerText = `${myProjects[i].title}`;
        sidebar.appendChild(project);
    }
};

function updateProjectView() {
    
}

function displayTodoInput() {
    // display form with overlay
    overlay.style.display = "flex";
    const form = document.createElement("form");
    form.setAttribute("id", "newTodoForm");

    // title
    const lblTitle = document.createElement("label");
    lblTitle.innerText = "Title";
    const titleInput = document.createElement("input");
    titleInput.setAttribute("id", "todoTitle");

    // description
    const lblDescription = document.createElement("label");
    lblDescription.innerText = "Description";
    const descriptionInput = document.createElement("textarea");
    descriptionInput.style.height = "10vh";
    descriptionInput.setAttribute("id", "todoDescription");

    // due date
    const lblDue = document.createElement("label");
    lblDue.innerText = "Due Date";
    const dueDateInput = document.createElement("input");
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
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const title = document.querySelector("#todoTitle").value;
    const dueDate = document.querySelector("#todoDueDate").value;
    const description = document.querySelector("#todoDescription").value;

    createNewTodo(title, dueDate, description);
    overlay.style.display = "none";
})

export {updateSidebar, displayTodoInput, sidebar, addTodoButton}
