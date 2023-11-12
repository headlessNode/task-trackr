import { getKeysFromLocalStorage } from "./eventHandling";
import { appendTasksFromLocalStorage } from "./DOM";

export function createTodayPage(){

    //create the skeleton of the page
    const mainBody = document.querySelector('.main-body');
    const mainBodyHeader = document.createElement('h2');
    mainBodyHeader.textContent = 'Inbox';

    const mainBodyContent = document.createElement('div');
    mainBodyContent.classList.add('main-body-content');
    
    mainBody.appendChild(mainBodyHeader);
    mainBody.appendChild(mainBodyContent);

    //append appropriate tasks
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const CurrentDate = `${day}-${month}-${year}`;

    let sortedKeys = getKeysFromLocalStorage();
    let parsedObjects = [];
    let todayTasks = [];

    sortedKeys.forEach((value,index,obj)=>{
        parsedObjects.push(JSON.parse(localStorage.getItem(value)));
    });
    parsedObjects.forEach((value, index, obj)=>{
        console.log(value);
        //check the duedate of each object and compare it to current date
        const taskDateParts = value.dueDate.split('-');
        const taskYear = taskDateParts[0];
        const taskMonth = taskDateParts[1];
        const taskDay = taskDateParts[2];
        const taskDate = `${taskDay}-${taskMonth}-${taskYear}`;

        console.log('task duedate: ' + taskDate);
        console.log(CurrentDate);

        if(taskDate === CurrentDate){
            todayTasks.push(value);
        }
    });

    appendTasksFromLocalStorage(todayTasks);

}