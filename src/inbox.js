import { appendTask } from "./DOM";

class Task {
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
};

export function createTaskObject(formData){
    let task = new Task(formData.title, formData.description,formData.dueDate,formData.priority);

    appendTaskToMainBody(task);
}

function appendTaskToMainBody(task){
    console.log(task);
    appendTask(task);
}