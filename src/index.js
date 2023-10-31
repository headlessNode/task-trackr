import './styles/style.css'

const content = document.querySelector('.content');

//mainbody DOM
const mainBody = document.createElement('div');
mainBody.classList.add('main-body');
mainBody.textContent = 'MAIN BODY';

//sidemenu DOM
const sideMenu = document.createElement('div');
sideMenu.classList.add('sidebar');
const title = document.createElement('h2');
title.classList.add('title');
title.textContent = 'Task Trackr';
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


//Footer DOM
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

//Add elements to page
content.appendChild(mainBody);
content.appendChild(footer);
content.appendChild(sideMenu);

//Logic for hiding and showing menu on btn click
function hideandShowSideMenu(){
    if(sideMenu.style.display === 'none' || sideMenu.style.display === ''){
        if(window.innerWidth <= 651){
            sideMenu.style.display = 'grid';
            sideMenu.style.gridColumn = '1/3';
            sideMenu.style.gridRow = '1/2';
            mainBody.style.gridColumn = '1/3';
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

//Menu btn click event
menuBtn.addEventListener('click', hideandShowSideMenu);


//event listener for screensize changes
window.addEventListener('resize', ()=>{
    let screenWidth = window.innerWidth;
    if(window.innerWidth <= 651 && sideMenu.style.display === 'grid'){
        sideMenu.style.gridColumn = '1/3';
        sideMenu.style.gridRow = '1/2';
        mainBody.style.gridColumn = '1/3';
        footer.style.gridColumn = '1/3';
    }
    else if(window.innerWidth > 651 && sideMenu.style.display === 'grid'){
        sideMenu.style.gridColumn = '1/2';
        sideMenu.style.gridRow = '1/4';
        mainBody.style.gridColumn = '2/3';
        footer.style.gridColumn = '2/3';
    }
});