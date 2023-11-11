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

    let tasks = [];

    if(localStorage.length>0){
        let keys = Object.keys(localStorage);
        keys.forEach((value, index, obj)=>{
            if(value.includes('Task')){
                tasks.push(JSON.parse(localStorage.getItem(value)));
            }
        })
        return {tasks};
    }
    else{
        return {tasks};
    }

})();

export function createTaskObject(formData){
    let task = new Task(formData.title, formData.description,formData.dueDate,formData.priority);
    taskList.tasks.push(task)
    addTaskToLocalStorage();

    appendTask(task);
}

function addTaskToLocalStorage(){
    taskList.tasks.forEach((value, index, obj )=>{
        if(localStorage.getItem(index) === null){
            let taskString = JSON.stringify(value);
            localStorage.setItem(index, taskString);
        }
    });
}