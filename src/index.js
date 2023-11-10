import './styles/style.css'
import { appendToPage,createPageHeader,createMainBody,createSideMenu, createFooter, taskInfoDialog } from './DOM'
import { hideandShowSideMenu,listenToScreenChanges,showTaskDialog, dialogSubmitEvent, dialogEscEvent, pageChangeEvent, checkLocalStorage } from './eventHandling';

const pageHeader = createPageHeader();
const mainBody = createMainBody();
const sideMenu = createSideMenu();
const footer = createFooter();
const dialog = taskInfoDialog();

appendToPage(pageHeader);
appendToPage(mainBody);
appendToPage(sideMenu);
appendToPage(footer);
appendToPage(dialog);

//EVENTS
const events = (()=>{

    //page load event
    document.addEventListener('DOMContentLoaded', checkLocalStorage)


    //menu btn event
    const menuBtn = document.querySelector('.menu-btn');
    menuBtn.addEventListener('click', hideandShowSideMenu);
    //event listener for screensize changes
    window.addEventListener('resize', listenToScreenChanges);

    //event listener for add task event
    const addTaskBtn = document.querySelector('.add-task-btn');
    addTaskBtn.addEventListener('click', showTaskDialog);

    //dialog submit btn event
    const dialogForm = document.querySelector('.dialog-form');
    dialogForm.addEventListener('submit', dialogSubmitEvent);
    //dialog esc btn event
    document.addEventListener('keydown', dialogEscEvent);

    //Inbox btn event
    const inboxBtn = document.querySelector('.inbox');
    inboxBtn.addEventListener('click', pageChangeEvent);
    //Today btn event
    const todayBtn = document.querySelector('.today');
    todayBtn.addEventListener('click', pageChangeEvent);
    //Inbox btn event
    const upcomingBtn = document.querySelector('.upcoming');
    upcomingBtn.addEventListener('click', pageChangeEvent);        

})();