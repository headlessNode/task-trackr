import { appendTask, appendTasksFromLocalStorage } from "./DOM";
import { getKeysFromLocalStorage, deleteTaskEvent } from "./eventHandling";

class Task {
    constructor(title, description, dueDate, priority, project){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
    }


};

let tasks = {
    taskList: [],

    updateTaskList: () => {
        if (localStorage.length > 0) {
            let keys = getKeysFromLocalStorage();
            let taskKeys = keys.taskKeys;
            let parsedObjects = [];

            if(taskKeys.length > 0){
                taskKeys.forEach((value) => {
                    parsedObjects.push(JSON.parse(localStorage.getItem(value)));
                });
    
                parsedObjects.forEach((value) => {
                    const existingTask = tasks.taskList.find((taskListValue) => taskListValue.title === value.title);
                    if (!existingTask) {
                        tasks.taskList.push(value);
                    }
                });
            }
        }
        else{
            tasks.taskList = [];
        }
    }
};


tasks.updateTaskList();

export{tasks};

export function createTaskObject(formData){
    tasks.updateTaskList();
    let task = new Task(formData.title, formData.description,formData.dueDate,formData.priority, formData.project);
    tasks.taskList.push(task)
    addTaskToLocalStorage();
    if(task.project === ''){
        appendTask(task);
    }
}

function addTaskToLocalStorage(){
    tasks.taskList.forEach((value, index, obj )=>{
        if(localStorage.getItem(index) === null){
            let taskString = JSON.stringify(value);
            localStorage.setItem(index, taskString);
        }
    });
}

export function createInboxPage(){
    const mainBody = document.querySelector('.main-body');
    const mainBodyHeader = document.createElement('h2');
    mainBodyHeader.textContent = 'Inbox';

    const mainBodyContent = document.createElement('div');
    mainBodyContent.classList.add('main-body-content');
    
    mainBody.appendChild(mainBodyHeader);
    mainBody.appendChild(mainBodyContent);
    
    if(localStorage.length > 0){
        let keys = getKeysFromLocalStorage();
        let taskKeys = keys.taskKeys;
        let parsedObjects = [];
        let inboxTasks = [];

        taskKeys.forEach((value,index,obj)=>{
            parsedObjects.push(JSON.parse(localStorage.getItem(value)));
        });
        parsedObjects.forEach((value, index, obj)=>{
            if(value.project === ''){
                inboxTasks.push(value);
            }
        });
        appendTasksFromLocalStorage(inboxTasks);
    }   
}