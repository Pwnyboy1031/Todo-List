import { Project } from "./project";

class toDo extends Project {
    constructor(title, dueDate, description, priority) {
        super(title, description);
        this.dueDate = dueDate;
        this.priority = priority;
    }
}


export {toDo}