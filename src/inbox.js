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

let taskList = (()=>{

    let tasks = [];

    if(localStorage.length>0){
        let keys = Object.keys(localStorage);
        keys.forEach((value, index, obj)=>{
            if(!isNaN(parseInt(value))){
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
    let task = new Task(formData.title, formData.description,formData.dueDate,formData.priority, formData.project);
    taskList.tasks.push(task)
    addTaskToLocalStorage();
    if(task.project === ''){
        appendTask(task);
    }
}

function addTaskToLocalStorage(){
    taskList.tasks.forEach((value, index, obj )=>{
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
        //task delete event
        const taskDeleteBtn = document.querySelectorAll('.task-delete-btn');
        taskDeleteBtn.forEach((btn)=>{
            btn.addEventListener('click', deleteTaskEvent);
        }); 
    }   
}