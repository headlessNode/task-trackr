import './styles/style.css'
import { appendToPage,createPageHeader,createMainBody,createSideMenu, createFooter, taskInfoDialog } from './DOM'
import { hideandShowSideMenu,listenToScreenChanges,addTask } from './eventHandling';

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
    //menu btn event
    const menuBtn = document.querySelector('.menu-btn');
    menuBtn.addEventListener('click', hideandShowSideMenu);
    //event listener for screensize changes
    window.addEventListener('resize', listenToScreenChanges);

    //event listener for add task event
    const addTaskBtn = document.querySelector('.add-task-btn');
    addTaskBtn.addEventListener('click', addTask);

})();