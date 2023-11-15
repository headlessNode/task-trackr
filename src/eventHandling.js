import { showTaskFormDialog, changeCurrentPage, appendTask, appendProjectToSideMenu, appendProjectToDialog } from "./DOM";
import { createTaskObject, createInboxPage,tasks } from "./inbox";
import { createProjectObject, projects } from "./project";

//Logic for hiding and showing menu on btn click
export function hideandShowSideMenu(){
    const sideMenu = document.querySelector('.sidebar');
    const mainBody = document.querySelector('.main-body');
    const headerContainer = document.querySelector('.header-container');
    const footer = document.querySelector('.footer');
    const title = document.querySelector('.title');
    const inbox = document.querySelector('.inbox');
    const today = document.querySelector('.today');
    const upcoming = document.querySelector('.upcoming');
    const projects = document.querySelector('.projects');
    const addProjects = document.querySelector('.add-projects');
    const projectsHeader = document.querySelector('.projects-header');

    if(sideMenu.style.display === 'none' || sideMenu.style.display === ''){
        if(window.innerWidth <= 651){
            sideMenu.style.display = 'grid';
            sideMenu.style.gridColumn = '1/3';
            sideMenu.style.gridRow = '1/2';
            mainBody.style.gridColumn = '1/3';
            headerContainer.style.display = 'none';
            footer.style.gridColumn = '1/3';
            window.scrollTo({top: 0, behavior: 'smooth'});
            sideMenu.style.height = '100%';
            sideMenu.style.width = '100%';
            title.style.opacity = '1';
            inbox.style.opacity = '1';
            today.style.opacity = '1';
            upcoming.style.opacity = '1';
            projects.style.opacity = '1';
            addProjects.style.opacity = '1';
            projectsHeader.style.opacity = '1';
        }
        else{
            sideMenu.style.display = 'grid';
            sideMenu.style.gridColumn = '1/2';
            sideMenu.style.gridRow = '1/4';
            mainBody.style.gridColumn = '2/3';
            headerContainer.style.gridColumn = '2/3';
            footer.style.gridColumn = '2/3';
            window.scrollTo({top: 0, behavior: 'smooth'});
            sideMenu.style.width = '100%';
            sideMenu.style.height = '100%';
            title.style.opacity = '1';
            inbox.style.opacity = '1';
            today.style.opacity = '1';
            upcoming.style.opacity = '1';
            projects.style.opacity = '1';
            addProjects.style.opacity = '1';
            projectsHeader.style.opacity = '1';
        }
    }
    else{
        sideMenu.style.display = 'none'
        mainBody.style.gridColumn = '1/3';
        headerContainer.style.display = 'grid';
        headerContainer.style.gridColumn = '1/3';
        headerContainer.style.gridRow = '1/2';
        footer.style.gridColumn = '1/3';
        window.scrollTo({top: 0, behavior: 'smooth'});
        sideMenu.style.width = '0';
        title.style.opacity = '0';
        inbox.style.opacity = '0';
        today.style.opacity = '0';
        upcoming.style.opacity = '0';
        projects.style.opacity = '0';
        addProjects.style.opacity = '0';
        projectsHeader.style.opacity = '0';
        if(window.innerWidth <= 651){
            sideMenu.style.height = '0';
        }
    }
}

export const listenToScreenChanges = ()=>{
    const sideMenu = document.querySelector('.sidebar');
    const mainBody = document.querySelector('.main-body');
    const headerContainer = document.querySelector('.header-container');
    const footer = document.querySelector('.footer');
    let screenWidth = window.innerWidth;
    if(window.innerWidth <= 651 && sideMenu.style.display === 'grid'){
        sideMenu.style.gridColumn = '1/3';
        sideMenu.style.gridRow = '1/2';
        mainBody.style.gridColumn = '1/3';
        headerContainer.style.display = 'none';
        headerContainer.style.gridColumn = '1/3';
        footer.style.gridColumn = '1/3';
    }
    else if(window.innerWidth > 651 && sideMenu.style.display === 'grid'){
        sideMenu.style.gridColumn = '1/2';
        sideMenu.style.gridRow = '1/4';
        mainBody.style.gridColumn = '2/3';
        headerContainer.style.display = 'grid';
        headerContainer.style.gridColumn = '2/3';
        headerContainer.style.gridRow = '1/2';
        footer.style.gridColumn = '2/3';
    }
};



export function dialogSubmitEvent(event){
    event.preventDefault();
    const dialog = document.querySelector('.task-dialog');
    //get data from the form
    const formData = new FormData(event.target);
    const formDataObject = {};
    for(const[key, value] of formData.entries()){
        formDataObject[key] = value;
    }

    let isDateValid = checkTaskDate(formDataObject);
    let isTaskUnique = checkDuplicateTask(formDataObject);
    if(!isDateValid && !isTaskUnique){
        const titleInput = document.querySelector('input[name="title"]');
        const dateInput = document.querySelector('input[type="date"]');
        dateInput.style.border = 'none';
        dateInput.style.borderBottom = '1px solid black';
        titleInput.style.border = 'none';
        titleInput.style.borderBottom = '1px solid black';
        //hide/remove the dialog
        dialog.close();
        dialog.style.top = '50%';
        dialog.style.opacity = '0';
        dialog.style.display = 'none';
        createTaskObject(formDataObject);
    }

}

function checkDuplicateTask(formDataObject) {
    if(localStorage.length > 0){
        const titleInput = document.querySelector('input[name="title"]');
        let keys = getKeysFromLocalStorage();
        let taskKeys = keys.taskKeys;
        let parsedObjects = [];
        taskKeys.forEach((value,index,obj)=>{
            parsedObjects.push(JSON.parse(localStorage.getItem(value)));
        });
    
        if (parsedObjects.some(value => formDataObject.title.toLowerCase() === value.title.toLowerCase())) {
            titleInput.style.border = '1px solid red';
            return true;
        }
        else{
            return false;
        }    
    }
    else{
        return false;
    }
}

function checkTaskDate(formDataObject){
    const dateInput = document.querySelector('input[type="date"]');
    const currentDate = new Date();
    const taskDate = new Date(formDataObject.dueDate);
    currentDate.setHours(0,0,0,0);
    taskDate.setHours(0,0,0,0);
    if(taskDate < currentDate){
        dateInput.style.border = '1px solid red';
        return true;
    }
    else{
        return false;   
    }
}

export function dialogEscEvent(event){
    const dialog = document.querySelector('.task-dialog');
    if(dialog.style.display === 'grid'){
        if(event.key === "Escape"){
            dialog.close();
            dialog.style.top = '50%';
            dialog.style.opacity = '0';
            dialog.style.display = 'none';  
        }
    }
}

export function showTaskDialog(){
    //call the function in DOM.js which displays dialog for adding task information and return that information.
    showTaskFormDialog();
    //call the function in inbox.js which creates a task based on the information received from the DOM.js
}

export function pageChangeEvent(e){

    const inboxBtn = document.querySelector('.inbox');
    const todayBtn = document.querySelector('.today');
    const upcomingBtn = document.querySelector('.upcoming');
    const projectBtns = document.querySelectorAll('.project');
    let inboxClicked;
    let todayClicked;
    let upcomingClicked;
    let projectBtnClicked = {
        state: false,
        element: e.currentTarget
    };


    if(e.currentTarget.textContent === 'Inbox'){
        inboxBtn.classList.add('clicked');
        todayBtn.classList.remove('clicked');
        upcomingBtn.classList.remove('clicked');
        projectBtns.forEach((btn)=>{
            if(btn.classList.contains('clicked')){
                btn.classList.remove('clicked');
            }
        })
        inboxClicked = true;
        todayClicked = false;
        upcomingClicked = false;
        projectBtnClicked.state = false;
    }
    else if (e.currentTarget.textContent === 'Today'){
        todayBtn.classList.add('clicked');
        inboxBtn.classList.remove('clicked');
        upcomingBtn.classList.remove('clicked');
        projectBtns.forEach((btn)=>{
            if(btn.classList.contains('clicked')){
                btn.classList.remove('clicked');
            }
        })
        inboxClicked = false;
        todayClicked = true;
        upcomingClicked = false;
        projectBtnClicked.state = false;
    }
    else if(e.currentTarget.textContent === 'Upcoming'){
        upcomingBtn.classList.add('clicked');
        todayBtn.classList.remove('clicked');
        inboxBtn.classList.remove('clicked');
        projectBtns.forEach((btn)=>{
            if(btn.classList.contains('clicked')){
                btn.classList.remove('clicked');
            }
        });
        inboxClicked = false;
        todayClicked = false;
        projectBtnClicked.state = false;
        upcomingClicked = true;
    }
    
    else if(e.currentTarget.classList.contains('project')){
        projectBtns.forEach((btn)=>{
            if(btn.classList.contains('clicked')){
                btn.classList.remove('clicked');
            }
        });
        upcomingBtn.classList.remove('clicked');
        todayBtn.classList.remove('clicked');
        inboxBtn.classList.remove('clicked');
        e.currentTarget.classList.add('clicked');
        inboxClicked = false;
        todayClicked = false;
        upcomingClicked = false;
        projectBtnClicked.state = true;
        projectBtnClicked.element = e.currentTarget;
    }

    changeCurrentPage(inboxClicked, todayClicked, upcomingClicked, projectBtnClicked);

}

export function getKeysFromLocalStorage(){
    if(localStorage.length > 0){
        let keys = Object.keys(localStorage);
        let sortedKeys = [];
        let projectKeys = [];
        keys.forEach((value, index, obj)=>{
            if(isNaN(value)){
                projectKeys.push(value);
            }
            else{sortedKeys.push(Number(value));}
        });
        sortedKeys.sort((a,b)=>{
            return a - b;
        });

        return {
            taskKeys: sortedKeys,
            projectKeyList: projectKeys
        }
    }
}

export function checkLocalStorage(){

    if(localStorage.length > 0){
        let keys = getKeysFromLocalStorage();
        let sortedKeys = keys.taskKeys;
        let projectKeys = keys.projectKeyList;

        sortedKeys.forEach((value, index, obj)=>{
            let task = JSON.parse(localStorage.getItem(value));
            if(task.project === ''){
                appendTask(task);
            }
        });

        projectKeys.forEach((value, index, obj)=>{
            appendProjectToSideMenu(JSON.parse(localStorage.getItem(value)));
            appendProjectToDialog(JSON.parse(localStorage.getItem(value)));
        });
    }
}

export function showProjectPopupEvent(){
    const addProjectsPopup = document.querySelector('.add-project-pop-up');
    addProjectsPopup.classList.toggle('hidden');
}

export function createProjectEvent(){
    const addProjectsPopup = document.querySelector('.add-project-pop-up');
    const projectName = document.querySelector('.project-name');
    const isProjectDuplicate = checkProjectDuplicate();
    if(projectName.value !== '' && !isProjectDuplicate){
        projectName.style.border = 'none';
        addProjectsPopup.classList.toggle('hidden');
        createProjectObject(projectName.value);
    }
}

function checkProjectDuplicate(){
    if(localStorage.length > 0){
        const projectName = document.querySelector('.project-name');
        let keys = getKeysFromLocalStorage();
        let projectKeys = keys.projectKeyList;
        let parsedObjects = [];
        projectKeys.forEach((value,index,obj)=>{
            parsedObjects.push(JSON.parse(localStorage.getItem(value)));
        });
        if (parsedObjects.some(value => projectName.value.toLowerCase() === value.title.toLowerCase())) {
            projectName.style.border = '1px solid red';
            return true;
        }
        else{
            return false;
        }        
    }
}

export function cancelProjectEvent(){
    const addProjectsPopup = document.querySelector('.add-project-pop-up');
    addProjectsPopup.classList.toggle('hidden');
}

export function deleteTaskEvent(e){
    const mainBodyContent = document.querySelector('.main-body-content'); 
    const taskContainer = e.currentTarget.parentElement;
    const taskDetails = taskContainer.querySelector('.task-details');

    const keys = getKeysFromLocalStorage();
    const taskKeys = keys.taskKeys;
    const projectKeys = keys.projectKeyList;

    const keysToModify = [];

    taskKeys.forEach((value,index, obj)=>{
        //parse the objects
        let task = JSON.parse(localStorage.getItem(value));
        //remove the object you want
        if(task.project === ''){
            if(task.title === taskDetails.textContent){
                localStorage.removeItem(value);
                mainBodyContent.removeChild(taskContainer);
            }
            else{
                keysToModify.push(value);
            }
        }
        else{
            const taskText = taskDetails.textContent;
            const pattern = /\s*\([^)]*\)\s*/g;
            const elementTitle = taskText.replace(pattern, '');
            console.log(elementTitle);
            if(task.title === elementTitle){
                localStorage.removeItem(value);
                mainBodyContent.removeChild(taskContainer);
            }
            //set the new ordered task keys and add them to the local storage
            else{
                keysToModify.push(value);
            }
        }
    });

    keysToModify.forEach((value,index, obj)=>{
        console.log(value);
        if(value != index){
            localStorage.setItem(index.toString(), localStorage.getItem(value));
            localStorage.removeItem(value);
            tasks.updateTaskList();
        }
        else{
            localStorage.setItem(index.toString(), localStorage.getItem(value));
            tasks.updateTaskList();
        }
        
    })
}

export function deleteProjectEvent(e){
    e.stopPropagation();
    console.log(e.currentTarget);
    const project = e.currentTarget.parentElement;
    const mainBody = document.querySelector('.main-body');

    const keys = getKeysFromLocalStorage();
    const projectKeys = keys.projectKeyList;
    const parsedObjects = [];
    projectKeys.forEach((value,index,obj)=>{
        parsedObjects.push(JSON.parse(localStorage.getItem(value)));
    })
    parsedObjects.forEach((value,index,obj)=>{
        if(value.title === project.textContent){
            localStorage.removeItem('Project-'+value.title);
            projects.updateProjectList();
            //remove the target project button
            const parent = project.parentElement;
            parent.removeChild(project);
            //remove all children of if first childs' textcontent = value.title
            if(mainBody.firstChild.textContent === project.textContent){
                removeTasksFromProjectPage(project);
                removeProjectPage();
            }
        }
    });

}

function removeTasksFromProjectPage(project){
    //remove from page
    const mainBodyContent = document.querySelector('.main-body-content');
    for(let i=0; i<mainBodyContent.childElementCount; i++){
        mainBodyContent.removeChild(mainBodyContent.firstChild);
    }
    //remove corresponding tasks from localStorage if available
    const keys = getKeysFromLocalStorage();
    const taskKeys = keys.taskKeys;
    taskKeys.forEach((value,index,obj)=>{
        let task = JSON.parse(localStorage.getItem(value));
        if(task.project === project.textContent){
            localStorage.removeItem(value);
        }
    });
}

function removeProjectPage(){
    const mainBody = document.querySelector('.main-body');
    for(let i=0; i<mainBody.childElementCount; i++){
        mainBody.removeChild(mainBody.firstChild);
    }
}