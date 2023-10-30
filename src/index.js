import './styles/style.css'

const content = document.querySelector('.content');

//mainbody
const mainBody = document.createElement('div');
mainBody.classList.add('main-body');
mainBody.textContent = 'MAIN BODY';

//Footer
const footer = document.createElement('div');
footer.classList.add('footer');

const menuBtn = document.createElement('button');
menuBtn.classList.add('menu-btn');
menuBtn.innerHTML = '<i class="fa-solid fa-bars fa-xl" style="color: #dce3e4;"></i>';


//for styling
const emptyContainer = document.createElement('div');
emptyContainer.classList.add('empty-container');



const addTaskBtn = document.createElement('button');
addTaskBtn.classList.add('add-task-btn');
addTaskBtn.innerHTML = '<i class="fa-solid fa-plus fa-lg" style="color: #dce3e4;"></i>';

footer.appendChild(emptyContainer);
footer.appendChild(addTaskBtn);
footer.appendChild(menuBtn);

//sidemenu
const sideMenu = document.createElement('div');
sideMenu.classList.add('sidebar');
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
projectsHeader.innerHTML = '<h2>Projects</h2>';
projects.appendChild(projectsHeader);
const addProjects = document.createElement('button');
addProjects.classList.add('add-projects');
addProjects.innerHTML = '<i class="fa-solid fa-plus fa-lg" style="color: #000000;"></i><p>Add Project</p>'
projects.appendChild(addProjects);

sideMenu.appendChild(projects);

content.appendChild(mainBody);
content.appendChild(footer);
content.appendChild(sideMenu);

menuBtn.addEventListener('click', ()=>{
    if(sideMenu.style.display === 'none' || sideMenu.style.display === ''){
        sideMenu.style.display = 'grid';
        sideMenu.style.gridColumn = '1/2';
        sideMenu.style.gridRow = '2/4';
        mainBody.style.gridColumn = '2/3';
        footer.style.gridColumn = '2/3';
    }
    else{
        sideMenu.style.display = 'none'
        mainBody.style.gridColumn = '1/3';
        footer.style.gridColumn = '1/3';
    }
});