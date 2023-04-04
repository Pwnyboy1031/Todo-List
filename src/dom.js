import { Project, myProjects } from "./index.js";

// find layout
const sidebar = document.getElementById("sidebar");

function updateSidebar() {
    for (let i = 0; i < myProjects.length; i++) {
        let project = document.createElement("h2");
        project.setAttribute("id", myProjects[i].title);
        project.setAttribute("class", "project")
        project.innerText = `${myProjects[i].title}`;
        sidebar.appendChild(project);
    }
};

export {updateSidebar}