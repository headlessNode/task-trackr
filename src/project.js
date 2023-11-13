import { appendProjectToSideMenu } from "./DOM";

class Project  {
    constructor(title){
        this.title = title;
    }
}

let projects = (()=>{
    let projectList = [];
    if(localStorage.length>0){
        let keys = Object.keys(localStorage);
        keys.forEach((value, index, obj)=>{
            if(value.includes('Project')){
                projectList.push(JSON.parse(localStorage.getItem(value)));
            }
        })
        return {projectList};
    }
    else{
        return {projectList};
    }
})();

export function createProjectObject(projectTitle){

    let project = new Project(projectTitle);
    projects.projectList.push(project);
    addProjectToLocalStorage();

    appendProjectToSideMenu(project);

}



export function addProjectToLocalStorage(){
    projects.projectList.forEach((value,index,obj)=>{
        if(localStorage.getItem('Project-' + value.title)=== null){
            let projectString = JSON.stringify(value);
            localStorage.setItem('Project-' + value.title, projectString);
        }
    })

}

export function createProjectPage(){
    console.log('Project page');
}