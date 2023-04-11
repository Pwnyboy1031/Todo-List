let projectDictionary = {};

class Project {
    constructor(title, description, list = []) {
        this.title = title;
        this.description = description;
        this.list = list;
    }

    addToDo(todo) {
        this.list.push(todo);
    }

    addProjectToDictionary() {
        projectDictionary[this.title] = this;
    }
}


export {Project, projectDictionary}