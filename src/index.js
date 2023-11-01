import './styles/style.css'
import { appendToPage,createPageHeader,createMainBody,createSideMenu, createFooter } from './DOM'
import { hideandShowSideMenu,listenToScreenChanges } from './eventHandling';

const pageHeader = createPageHeader();
const mainBody = createMainBody();
const sideMenu = createSideMenu();
const footer = createFooter();

appendToPage(pageHeader);
appendToPage(mainBody);
appendToPage(sideMenu);
appendToPage(footer);

//EVENTS
const events = (()=>{
    //menu btn event
    const menuBtn = document.querySelector('.menu-btn');
    menuBtn.addEventListener('click', hideandShowSideMenu);
    //event listener for screensize changes
    window.addEventListener('resize', listenToScreenChanges);
})();