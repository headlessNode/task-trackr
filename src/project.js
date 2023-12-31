import { appendProjectToDialog, appendProjectToSideMenu, appendTasksFromLocalStorage } from "./DOM";
import { getKeysFromLocalStorage, deleteTaskEvent } from "./eventHandling";

class Project  {
    constructor(title){
        this.title = title;
    }
}

let projects = {
    projectList: [],

    updateProjectList: ()=>{
        if(localStorage.length>0){
            let keys = Object.keys(localStorage);
            keys.forEach((value, index, obj)=>{
                if(value.includes('Project')){
                    projects.projectList.push(JSON.parse(localStorage.getItem(value)));
                }
            })
        }
        else{
            projects.projectList = [];
        }   
    }

};

projects.updateProjectList();

export {projects};

export function createProjectObject(projectTitle){
    projects.updateProjectList();
    let project = new Project(projectTitle);
    projects.projectList.push(project);
    addProjectToLocalStorage();

    appendProjectToSideMenu(project);
    appendProjectToDialog(project);

}



export function addProjectToLocalStorage(){
    projects.projectList.forEach((value,index,obj)=>{
        if(localStorage.getItem('Project-' + value.title)=== null){
            let projectString = JSON.stringify(value);
            localStorage.setItem('Project-' + value.title, projectString);
        }
    })

}

export function createProjectPage(projectBtnClicked){
    let keys = getKeysFromLocalStorage();
    let projectKeys = keys.projectKeys;
    let taskKeys = keys.taskKeys;
    let project = projectBtnClicked.element;

    const mainBody = document.querySelector('.main-body');
    const mainBodyHeader = document.createElement('h2');
    mainBodyHeader.textContent = project.textContent;

    const mainBodyContent = document.createElement('div');
    mainBodyContent.classList.add('main-body-content');
    
    mainBody.appendChild(mainBodyHeader);
    mainBody.appendChild(mainBodyContent);

    let parsedObjects = [];
    let projectTasks = [];

    taskKeys.forEach((value,index,obj)=>{
        parsedObjects.push(JSON.parse(localStorage.getItem(value)));
    });
    parsedObjects.forEach((value, index, obj)=>{
        if(value.project != undefined){
            if(value.project === project.textContent){
                let originalTitle = value.title;
                let splitTitle = originalTitle.split(' (Project:')[0].trim();
                value.title = splitTitle;
                projectTasks.push(value);
            }
        }
    });

    appendTasksFromLocalStorage(projectTasks);
}