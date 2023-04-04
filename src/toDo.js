import { Project } from "./project";

class toDo extends Project {
    constructor(title, description, dueDate, priority) {
        super(title, description);
        this.dueDate = dueDate;
        this.priority = priority;
    }
}


export {toDo}