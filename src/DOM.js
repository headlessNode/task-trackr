
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
    mainBodyHeader.textContent = 'Header';

    const mainBodyContent = document.createElement('div');
    mainBodyContent.classList.add('main-body-content');

    mainBody.appendChild(mainBodyHeader);
    mainBody.appendChild(mainBodyContent);    

    return mainBody;
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

    //DESCRIPTION
    const description = document.createElement('input');
    description.setAttribute('type', 'text');
    description.setAttribute('name', 'description');
    description.setAttribute('placeholder', 'Description');
    description.setAttribute('required', 'true');

    //DUE DATE
    const dueDate = document.createElement('input');
    dueDate.setAttribute('type', 'date');
    dueDate.setAttribute('name', 'dueDate');
    dueDate.setAttribute('required', 'true');

    //PRIORITY
    const priority = document.createElement('fieldset');
    const priorityLegend = document.createElement('legend');    
    priorityLegend.textContent = 'Select task priority:';
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



    //SUBMIT BTN
    const submit = document.createElement('button');
    submit.classList.add('submit-btn');
    submit.setAttribute('type', 'submit');
    submit.textContent = 'Submit';

    dialogForm.appendChild(title);
    dialogForm.appendChild(description);
    dialogForm.appendChild(dueDate);
    dialogForm.appendChild(priority);
    dialogForm.appendChild(submit);

    dialog.appendChild(dialogForm);


    return dialog;
}

export function showTaskFromDialog(){
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

    //checkbox
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', 'task-checkbox');
    taskContainer.appendChild(checkbox);
    //task title
    const taskTitle = document.createElement('p');
    taskTitle.classList.add('task-title');
    taskTitle.textContent = task.title;
    taskContainer.appendChild(taskTitle);
    //task priority
    const taskPriority = document.createElement('p');
    taskPriority.classList.add('task-priority');
    taskPriority.textContent = task.priority;
    taskContainer.appendChild(taskPriority);
    //task duedate
    const taskDueDate = document.createElement('p');
    taskDueDate.classList.add('task-duedate');
    taskDueDate.textContent = task.dueDate;
    taskContainer.appendChild(taskDueDate);


    //task description will go in the details dialog box, shown when a button is clicked


    mainBodyContent.appendChild(taskContainer);

}