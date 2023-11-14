import { addProjectEvent } from "./eventHandling.js";
import {createInboxPage} from "./inbox.js";
import {createTodayPage} from "./today.js";
import {createUpcomingPage} from "./upcoming.js";
import {createProjectPage} from "./project.js";
import {addListenerToProjectBtns} from "./index.js";

//append element to the webpage
export function appendToPage(element){
    //selector for webpage content
    const content = document.querySelector('.content');
    
    content.appendChild(element);
}

export function createPageHeader(){
    //header DOM
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('header-container');
    const header = document.createElement('div');
    header.classList.add('header');
    header.innerHTML = '<i class="icon fa-solid fa-rotate-90 fa-clipboard-list fa-2xl" style="color: #090a0b;"></i><h1>Task Trackr</h1>';
    headerContainer.appendChild(header);
    
    return headerContainer;
}

export function createMainBody(){
    //mainbody DOM
    const mainBody = document.createElement('div');
    mainBody.classList.add('main-body');
    const mainBodyHeader = document.createElement('h2');
    mainBodyHeader.textContent = 'Inbox';

    const mainBodyContent = document.createElement('div');
    mainBodyContent.classList.add('main-body-content');
    
    mainBody.appendChild(mainBodyHeader);
    mainBody.appendChild(mainBodyContent);

    return mainBody;
}

function createProjectPopUp(){
    const popUp = document.createElement('div');
    popUp.classList.add('add-project-pop-up');
    popUp.classList.toggle('hidden');

    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'project-name');
    nameInput.classList.add('project-name');

    const popUpBtns = document.createElement('div');
    popUpBtns.classList.add('pop-up-btns');
    const projectAddBtn = document.createElement('button');
    const projectCancelBtn = document.createElement('button');
    projectAddBtn.textContent = 'Add';
    projectCancelBtn.textContent = 'Cancel';
    projectAddBtn.setAttribute('type', 'button');
    projectCancelBtn.setAttribute('type', 'button');
    projectAddBtn.classList.add('add-project-btn');
    projectCancelBtn.classList.add('cancel-project-btn');
    popUpBtns.appendChild(projectAddBtn);
    popUpBtns.appendChild(projectCancelBtn);


    popUp.appendChild(nameInput);
    popUp.appendChild(popUpBtns);

    return popUp;

}

export function createSideMenu(){
    //sidemenu DOM
    const sideMenu = document.createElement('div');
    sideMenu.classList.add('sidebar');
    const title = document.createElement('div');
    title.classList.add('title');
    title.innerHTML = '<i class="icon fa-solid fa-rotate-90 fa-clipboard-list fa-xl" style="color: #090a0b;"></i><h2>Task Trackr</h2>';
    sideMenu.appendChild(title);
    const inbox = document.createElement('button');
    inbox.classList.add('inbox');
    inbox.classList.add('clicked');
    inbox.innerHTML = '<i class="fa-solid fa-inbox fa-lg" style="color: #5089ED;"></i><p>Inbox</p>';
    sideMenu.appendChild(inbox);
    const today = document.createElement('button');
    today.classList.add('today');
    today.innerHTML = '<i class="fa-solid fa-calendar-day fa-lg" style="color: #37A056;"></i><p>Today</p>';
    sideMenu.appendChild(today);
    const upcoming = document.createElement('button');
    upcoming.classList.add('upcoming');
    upcoming.innerHTML = '<i class="fa-solid fa-calendar-week fa-lg" style="color: #A366FF;"></i><p>Upcoming</p>';
    sideMenu.appendChild(upcoming);

    const projects = document.createElement('div');
    projects.classList.add('projects');
    const projectsHeader = document.createElement('div');
    projectsHeader.classList.add('projects-header');
    projectsHeader.innerHTML = '<h2>Projects</h2>';
    projects.appendChild(projectsHeader);
    const addProjects = document.createElement('button');
    addProjects.classList.add('add-projects');
    addProjects.innerHTML = '<i class="fa-solid fa-plus fa-lg" style="color: #000000;"></i>'
    projectsHeader.appendChild(addProjects);

    projects.appendChild(createProjectPopUp());

    sideMenu.appendChild(projects);
    

    return sideMenu;
}

export function createFooter(){
    //Footer DOM
    const footer = document.createElement('div');
    footer.classList.add('footer');

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('menu-btn');
    menuBtn.innerHTML = '<i class="fa-solid fa-bars fa-xl" style="color: #dce3e4;"></i>';

    const addTaskBtn = document.createElement('button');
    addTaskBtn.classList.add('add-task-btn');
    addTaskBtn.innerHTML = '<i class="fa-solid fa-plus fa-lg" style="color: #dce3e4;"></i>';

    footer.appendChild(addTaskBtn);
    footer.appendChild(menuBtn);

    return footer;

}

export function taskInfoDialog(){
    const dialog = document.createElement('dialog');
    dialog.classList.add('task-dialog');
    const dialogForm = document.createElement('form');
    dialogForm.classList.add('dialog-form');
    //TITLE
    const title = document.createElement('input');
    title.setAttribute('name', 'title');
    title.setAttribute('type', 'text');
    title.setAttribute('placeholder', 'Title');
    title.setAttribute('required', 'true');
    title.setAttribute('maxlength', '16');

    //DESCRIPTION
    const description = document.createElement('input');
    description.setAttribute('type', 'text');
    description.setAttribute('name', 'description');
    description.setAttribute('placeholder', 'Description');
    description.setAttribute('required', 'true');
    description.setAttribute('maxlength', '20');

    //DUE DATE
    const dueDate = document.createElement('input');
    dueDate.setAttribute('type', 'date');
    dueDate.setAttribute('name', 'dueDate');
    dueDate.setAttribute('required', 'true');

    //PRIORITY
    const priority = document.createElement('fieldset');
    const priorityLegend = document.createElement('legend');    
    priorityLegend.textContent = 'Select task priority';
    priority.appendChild(priorityLegend);    
    //high priority
    const high = document.createElement('div');
    high.classList.add('high-priority');
    high.innerHTML = '<input type="radio" id="high" name="priority" value="high" checked /><label for="high">High</label>';
    priority.appendChild(high);
    //medium priority
    const medium = document.createElement('div');
    medium.classList.add('medium-priority');
    medium.innerHTML = '<input type="radio" id="medium" name="priority" value="medium" /><label for="medium">Medium</label>';
    priority.appendChild(medium);
    //low priority
    const low = document.createElement('div');
    low.classList.add('low-priority');
    low.innerHTML = '<input type="radio" id="low" name="priority" value="low" /><label for="low">Low</label>';
    priority.appendChild(low);

    //Project dropdown
    const projectDropDownField = document.createElement('fieldset');
    projectDropDownField.setAttribute('id', 'project-drop-down');
    const projectDropDownLegend = document.createElement('legend');    
    projectDropDownLegend.textContent = 'Assign task to a project';
    projectDropDownField.appendChild(projectDropDownLegend);
    const selectContainer = document.createElement('select');
    selectContainer.setAttribute('name', 'project');
    selectContainer.setAttribute('id', 'project-select');
    const defaultOption = document.createElement('option');
    defaultOption.textContent = 'Select a project';
    defaultOption.setAttribute('value', '');
    selectContainer.appendChild(defaultOption);
    projectDropDownField.appendChild(selectContainer);

    //SUBMIT BTN
    const submit = document.createElement('button');
    submit.classList.add('submit-btn');
    submit.setAttribute('type', 'submit');
    submit.textContent = 'Submit';

    dialogForm.appendChild(title);
    dialogForm.appendChild(description);
    dialogForm.appendChild(dueDate);
    dialogForm.appendChild(priority);
    dialogForm.appendChild(projectDropDownField);
    dialogForm.appendChild(submit);

    dialog.appendChild(dialogForm);


    return dialog;
}

export function showTaskFormDialog(){
    const dialog = document.querySelector('.task-dialog');
    //show the dialog
    dialog.style.display = 'grid';
    dialog.showModal();
    dialog.style.top = '30%';
    dialog.style.opacity = '1';

}

export function appendTask(task){
    const mainBodyContent = document.querySelector('.main-body-content');
    
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');
    taskContainer.classList.add('tooltip');
    const taskDescription = document.createElement('span');
    taskDescription.classList.add('tooltip-text');
    taskDescription.classList.add('task-description');
    taskDescription.textContent = task.description;
    taskContainer.appendChild(taskDescription);
    
    //checkbox
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('name', 'task-checkbox');
    taskContainer.appendChild(checkbox);
    //task details
    const taskDetails = document.createElement('div');
    taskDetails.classList.add('task-details');

    taskDetails.textContent = task.title;
    
    taskContainer.appendChild(taskDetails);
    //task duedate
    const taskDueDate = document.createElement('p');
    taskDueDate.classList.add('task-duedate');
    const parts = task.dueDate.split('-');
    const year = parts[0];
    const month = parts[1];
    const day = parts[2];
    const date = `${day}-${month}-${year}`;
    taskDueDate.textContent = date;
    taskContainer.appendChild(taskDueDate);
    
    //task priority
    const taskPriority = document.createElement('p');
    taskPriority.classList.add('task-priority');
    if(task.priority === 'high'){
        taskPriority.innerHTML = '<i class="fa-solid fa-circle-exclamation fa-lg" style="color: #ad0000;"></i>';
    }
    else if(task.priority === 'medium'){
        taskPriority.innerHTML = '<i class="fa-solid fa-circle-exclamation fa-lg" style="color: #00b400;"></i>';
    }
    else if(task.priority === 'low'){
        taskPriority.innerHTML = '<i class="fa-solid fa-circle-exclamation fa-lg" style="color: #97ce97;"></i>';
    }
    taskContainer.appendChild(taskPriority);

    mainBodyContent.appendChild(taskContainer);

}

export function changeCurrentPage(inboxClicked, todayClicked, upcomingClicked, projectBtnClicked){

    const mainBody = document.querySelector('.main-body');
    
    if(mainBody.childElementCount > 0){
        for(let i = 0; i <= mainBody.childElementCount; i++){
            mainBody.removeChild(mainBody.firstChild);
        }
    }

    if(inboxClicked){
        createInboxPage();
    }
    else if(todayClicked){
        createTodayPage();
    }
    else if(upcomingClicked){    
        createUpcomingPage();
    }
    else if(projectBtnClicked.state){
        createProjectPage(projectBtnClicked);
    }
 
}

export function appendTasksFromLocalStorage(sortedKeys){
    sortedKeys.forEach((value, index, obj)=>{
        console.log(typeof(value));
        if(typeof value === 'number'){
            appendTask(JSON.parse(localStorage.getItem(value)));
        }
        else if(typeof value === 'object' && value !== null){
            appendTask(value);
        }
    });
}

export function appendProjectToSideMenu(projectObject){
    const projects = document.querySelector('.projects');
    const projectPopup = document.querySelector('.add-project-pop-up');
    const projectName = document.querySelector('.project-name');

    const project = document.createElement('button');
    project.setAttribute('id', 'project-btn');
    project.classList.add('project');
    project.classList.add('project-' + projectObject.title);
    project.setAttribute('id', 'project-btn');
    const text = document.createElement('p');
    text.textContent = projectObject.title;
    text.setAttribute('id', 'project-btn');
    project.appendChild(text);
    const icon = document.createElement('div');
    icon.classList.add('project-icon');
    icon.innerHTML = '<i class="fa-solid fa-circle" style="color: #5590f7;"></i>';
    icon.setAttribute('id', 'project-btn');
    project.appendChild(icon);
    projects.insertBefore(project, projectPopup);

}

export function appendProjectToDialog(projectObject){
    const dialogFrom = document.querySelector('.dialog-form');
    const projectDropDown = document.querySelector('.project-drop-down');
    const projectSelect = document.querySelector('#project-select');
    const projectOption = document.createElement('option');
    projectOption.textContent = projectObject.title;
    projectOption.setAttribute('value', projectObject.title);
    projectSelect.appendChild(projectOption);
}