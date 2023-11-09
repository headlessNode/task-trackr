import { showTaskFormDialog, changeCurrentPage } from "./DOM";
import { createTaskObject } from "./inbox";

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

    const currentDate = new Date();
    const taskDate = new Date(formDataObject.dueDate);

    currentDate.setHours(0,0,0,0);
    taskDate.setHours(0,0,0,0);

    console.log(currentDate);
    console.log(taskDate);

    if(taskDate < currentDate){
        const dateInput = document.querySelector('input[type="date"]');
        dateInput.style.border = '1px solid red';
        
    }
    else{
        const dateInput = document.querySelector('input[type="date"]');
        dateInput.style.border = 'none';
        dateInput.style.borderBottom = '1px solid black';
        //hide/remove the dialog
        dialog.close();
        dialog.style.top = '50%';
        dialog.style.opacity = '0';
        dialog.style.display = 'none';

        createTaskObject(formDataObject);   
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
    console.log('addTaskBtn clicked');
    //call the function in DOM.js which displays dialog for adding task information and return that information.
    showTaskFormDialog();
    //call the function in inbox.js which creates a task based on the information received from the DOM.js
}

export function pageChangeEvent(e){

    const inboxBtn = document.querySelector('.inbox');
    const todayBtn = document.querySelector('.today');
    const upcomingBtn = document.querySelector('.upcoming');
    let inboxClicked;
    let todayClicked;
    let upcomingClicked;

    if(e.target.textContent === 'Inbox'){
        inboxBtn.classList.add('clicked');
        todayBtn.classList.remove('clicked');
        upcomingBtn.classList.remove('clicked');
        inboxClicked = true;
        todayClicked = false;
        upcomingClicked = false;
    }
    else if (e.target.textContent === 'Today'){
        
        // todayBtn.style.background = 'rgb(247, 244, 243)';
        // inboxBtn.style.background = 'none';
        // upcomingBtn.style.background = 'none';
        todayBtn.classList.add('clicked');
        inboxBtn.classList.remove('clicked');
        upcomingBtn.classList.remove('clicked');
        inboxClicked = false;
        todayClicked = true;
        upcomingClicked = false;
    }
    else if(e.target.textContent === 'Upcoming'){
        
        // upcomingBtn.style.background = 'rgb(247, 244, 243)';
        // todayBtn.style.background = 'none';
        // inboxBtn.style.background = 'none';
        upcomingBtn.classList.add('clicked');
        todayBtn.classList.remove('clicked');
        inboxBtn.classList.remove('clicked');
        inboxClicked = false;
        todayClicked = false;
        upcomingClicked = true;
    }

    changeCurrentPage(inboxClicked, todayClicked, upcomingClicked);

}