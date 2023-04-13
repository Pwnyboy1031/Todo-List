import { projectDictionary } from "./project";

function initMain() {
    const welcomeMessage = document.createElement("h2");
    welcomeMessage.innerHTML = "Welcome to Now and Later! <br> Select a project to get started."
    welcomeMessage.setAttribute("id", "welcomeMessage")
    main.appendChild(welcomeMessage);
}

function mainLoad() {
    // reset main content
    const main = document.getElementById("main");
    main.innerHTML = "";
    

    const projectName = document.querySelector(".selected").textContent;
    const workingProject = projectDictionary[projectName];

    for (let todo in workingProject.list) {
        const workingTodo = document.createElement("div");
        workingTodo.setAttribute("class", "mainTodo");
        workingTodo.setAttribute("id", `${workingProject.list[todo].title}`);

        // title 
        const title = document.createElement("div");
        title.setAttribute("class", "todoTitle");
        title.textContent = workingProject.list[todo].title;
        workingTodo.appendChild(title);

        // description
        const description = document.createElement("div");
        description.setAttribute("class", "todoDescription");
        description.textContent = workingProject.list[todo].description;
        workingTodo.appendChild(description);

        // due date
        const dueDate = document.createElement("div");
        dueDate.setAttribute("class", "todoDueDate");
        dueDate.textContent = workingProject.list[todo].dueDate;
        workingTodo.appendChild(dueDate);

        // checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.setAttribute("class", "todoCheckbox");
        workingTodo.appendChild(checkbox);

        // delete
        const trashIcon = document.createElement("img");
        trashIcon.setAttribute("src", "/assets/trash.svg");
        trashIcon.setAttribute("id", `${workingProject.list[todo].title}Trash`)
        trashIcon.setAttribute("class", "trash");
        workingTodo.append(trashIcon);

        trashIcon.addEventListener("click", (e) => {
            workingProject.deleteTodo(workingProject.list[todo]);
            localStorage.setItem("projectData", JSON.stringify(projectDictionary));
            mainLoad();
            
        })

        main.appendChild(workingTodo);
    }
};

export {mainLoad, initMain};