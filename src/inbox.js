import { appendTask } from "./DOM";

class Task {
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
};

let taskList = (()=>{

    return [];

})();

export function createTaskObject(formData){
    let task = new Task(formData.title, formData.description,formData.dueDate,formData.priority);
    taskList.push(task)
    addTaskToLocalStorage();

    appendTask(task);
}

function addTaskToLocalStorage(){
    taskList.forEach((value, index, obj )=>{
        if(localStorage.getItem(index) === null){
            let taskString = JSON.stringify(value);
            localStorage.setItem(`Task${index}`, taskString);
        }
    });
}