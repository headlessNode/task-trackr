
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
    mainBodyContent.textContent = 'Main content';

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


// //event listener for add task event
// defaultPageSetup.addTaskBtn('click', ()=>{
//     console.log('addTaskbtn clicked');
// });





