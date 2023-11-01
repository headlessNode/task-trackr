class Task {
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
};

export function createTaskObject(title,description,dueDate,priority){
    let task = new Task(title, description,dueDate,priority);

    
}