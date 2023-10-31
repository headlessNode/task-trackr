import './styles/style.css'

const content = document.querySelector('.content');

//mainbody DOM
const mainBody = document.createElement('div');
mainBody.classList.add('main-body');
mainBody.textContent = 'MAIN BODY';
content.appendChild(mainBody);

//header footer and sidemenu DOM
let defaultPageSetup = (()=>{
    //header DOM
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('header-container');
    const header = document.createElement('div');
    header.classList.add('header');
    header.innerHTML = '<i class="icon fa-solid fa-rotate-90 fa-clipboard-list fa-2xl" style="color: #090a0b;"></i><h1>Task Trackr</h1>';
    headerContainer.appendChild(header);

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

    //Add elements to page
    content.appendChild(headerContainer);
    content.appendChild(footer);
    content.appendChild(sideMenu);

    return {menuBtn, addTaskBtn, sideMenu, footer, title,inbox,today,upcoming,projects,addProjects, projectsHeader, headerContainer};

})();

//Logic for hiding and showing menu on btn click
function hideandShowSideMenu(){
    if(defaultPageSetup.sideMenu.style.display === 'none' || defaultPageSetup.sideMenu.style.display === ''){
        if(window.innerWidth <= 651){
            defaultPageSetup.sideMenu.style.display = 'grid';
            defaultPageSetup.sideMenu.style.gridColumn = '1/3';
            defaultPageSetup.sideMenu.style.gridRow = '1/2';
            mainBody.style.gridColumn = '1/3';
            defaultPageSetup.headerContainer.style.display = 'none';
            defaultPageSetup.footer.style.gridColumn = '1/3';
            window.scrollTo({top: 0, behavior: 'smooth'});
            defaultPageSetup.sideMenu.style.height = '100%';
            defaultPageSetup.sideMenu.style.width = '100%';
            defaultPageSetup.title.style.opacity = '1';
            defaultPageSetup.inbox.style.opacity = '1';
            defaultPageSetup.today.style.opacity = '1';
            defaultPageSetup.upcoming.style.opacity = '1';
            defaultPageSetup.projects.style.opacity = '1';
            defaultPageSetup.addProjects.style.opacity = '1';
            defaultPageSetup.projectsHeader.style.opacity = '1';
        }
        else{
            defaultPageSetup.sideMenu.style.display = 'grid';
            defaultPageSetup.sideMenu.style.gridColumn = '1/2';
            defaultPageSetup.sideMenu.style.gridRow = '1/4';
            mainBody.style.gridColumn = '2/3';
            defaultPageSetup.headerContainer.style.gridColumn = '2/3';
            defaultPageSetup.footer.style.gridColumn = '2/3';
            window.scrollTo({top: 0, behavior: 'smooth'});
            defaultPageSetup.sideMenu.style.width = '100%';
            defaultPageSetup.sideMenu.style.height = '100%';
            defaultPageSetup.title.style.opacity = '1';
            defaultPageSetup.inbox.style.opacity = '1';
            defaultPageSetup.today.style.opacity = '1';
            defaultPageSetup.upcoming.style.opacity = '1';
            defaultPageSetup.projects.style.opacity = '1';
            defaultPageSetup.addProjects.style.opacity = '1';
            defaultPageSetup.projectsHeader.style.opacity = '1';
        }
    }
    else{
        defaultPageSetup.sideMenu.style.display = 'none'
        mainBody.style.gridColumn = '1/3';
        defaultPageSetup.headerContainer.style.display = 'grid';
        defaultPageSetup.headerContainer.style.gridColumn = '1/3';
        defaultPageSetup.headerContainer.style.gridRow = '1/2';
        defaultPageSetup.footer.style.gridColumn = '1/3';
        window.scrollTo({top: 0, behavior: 'smooth'});
        defaultPageSetup.sideMenu.style.width = '0';
        defaultPageSetup.title.style.opacity = '0';
        defaultPageSetup.inbox.style.opacity = '0';
        defaultPageSetup.today.style.opacity = '0';
        defaultPageSetup.upcoming.style.opacity = '0';
        defaultPageSetup.projects.style.opacity = '0';
        defaultPageSetup.addProjects.style.opacity = '0';
        defaultPageSetup.projectsHeader.style.opacity = '0';
        if(window.innerWidth <= 651){
            defaultPageSetup.sideMenu.style.height = '0';
        }
    }
}

//Menu btn click event
defaultPageSetup.menuBtn.addEventListener('click', hideandShowSideMenu);


//event listener for screensize changes
window.addEventListener('resize', ()=>{
    let screenWidth = window.innerWidth;
    if(window.innerWidth <= 651 && defaultPageSetup.sideMenu.style.display === 'grid'){
        defaultPageSetup.sideMenu.style.gridColumn = '1/3';
        defaultPageSetup.sideMenu.style.gridRow = '1/2';
        mainBody.style.gridColumn = '1/3';
        defaultPageSetup.headerContainer.style.display = 'none';
        defaultPageSetup.headerContainer.style.gridColumn = '1/3';
        defaultPageSetup.footer.style.gridColumn = '1/3';
    }
    else if(window.innerWidth > 651 && defaultPageSetup.sideMenu.style.display === 'grid'){
        defaultPageSetup.sideMenu.style.gridColumn = '1/2';
        defaultPageSetup.sideMenu.style.gridRow = '1/4';
        mainBody.style.gridColumn = '2/3';
        defaultPageSetup.headerContainer.style.display = 'grid';
        defaultPageSetup.headerContainer.style.gridColumn = '2/3';
        defaultPageSetup.headerContainer.style.gridRow = '1/2';
        defaultPageSetup.footer.style.gridColumn = '2/3';
    }
});