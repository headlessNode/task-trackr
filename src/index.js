import './style.css'

const content = document.querySelector('.content');

const footer = document.createElement('div');
footer.classList.add('footer');

const menuBtn = document.createElement('button');
menuBtn.classList.add('menu-btn');
menuBtn.innerHTML = '<i class="fa-solid fa-bars fa-xl" style="color: #dce3e4;"></i>';



const emptyContainer = document.createElement('div');
emptyContainer.classList.add('empty-container');



const addTaskBtn = document.createElement('button');
addTaskBtn.classList.add('add-task-btn');
addTaskBtn.innerHTML = '<i class="fa-solid fa-plus fa-lg" style="color: #dce3e4;"></i>';

footer.appendChild(emptyContainer);
footer.appendChild(addTaskBtn);
footer.appendChild(menuBtn);

content.appendChild(footer);