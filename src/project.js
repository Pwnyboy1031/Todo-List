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

    deleteTodo(todo) {
        const index = this.list.indexOf(todo);
        this.list.splice(index, 1); 
    }

    addProjectToDictionary() {
        projectDictionary[this.title] = this;
    }
}


export {Project, projectDictionary}