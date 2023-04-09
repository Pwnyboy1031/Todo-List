class Project {
    constructor(title, description, list = []) {
        this.title = title;
        this.description = description;
        this.list = list;
    }

    addToDo(todo) {
        this.list.push(todo);
    }
}

export {Project}