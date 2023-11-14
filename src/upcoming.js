import { getKeysFromLocalStorage, deleteTaskEvent } from "./eventHandling";
import { appendTasksFromLocalStorage } from "./DOM";

export function createUpcomingPage(){
    const mainBody = document.querySelector('.main-body');
    const mainBodyHeader = document.createElement('h2');
    mainBodyHeader.textContent = 'Upcoming';

    const mainBodyContent = document.createElement('div');
    mainBodyContent.classList.add('main-body-content');
    
    mainBody.appendChild(mainBodyHeader);
    mainBody.appendChild(mainBodyContent);

    //append appropriate tasks
    if(localStorage.length > 0){
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const day = today.getDate();
        const CurrentDate = `${day}-${month}-${year}`;

        let keys = getKeysFromLocalStorage();
        let taskKeys = keys.taskKeys;
        let parsedObjects = [];
        let upcomingTasks = [];

        taskKeys.forEach((value,index,obj)=>{
            parsedObjects.push(JSON.parse(localStorage.getItem(value)));
        });
        parsedObjects.forEach((value, index, obj)=>{
            //check the duedate of each object and compare it to current date
            const taskDateParts = value.dueDate.split('-');
            const taskYear = taskDateParts[0];
            const taskMonth = taskDateParts[1];
            const taskDay = taskDateParts[2];
            const taskDate = `${taskDay}-${taskMonth}-${taskYear}`;



            if(taskDate > CurrentDate){
                if(value.project != ''){
                    value.title = value.title + ' (Project: ' + value.project + ')';
                }
                upcomingTasks.push(value);
            }
        });

        upcomingTasks.sort((a,b)=>{
            return a.dueDate - b.dueDate;
        });

        appendTasksFromLocalStorage(upcomingTasks);
        //task delete event
        const taskDeleteBtn = document.querySelectorAll('.task-delete-btn');
        taskDeleteBtn.forEach((btn)=>{
            btn.addEventListener('click', deleteTaskEvent);
        });       
    } 
}