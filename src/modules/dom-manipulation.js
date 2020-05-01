import {projectArray} from './project-controller';


const projectList = document.getElementById('project-list');
let projectId = 0;

function renderProjects() {
    console.log(projectArray);
    while (projectList.firstChild) {
        projectList.removeChild(projectList.firstChild);
    }
    projectArray.forEach(projectDisplay);
    
}

function projectDisplay(project) {
    //let projectId = 0;
    project.id = projectId+1;
    projectId++;

    const individualContainer = document.createElement('div');
    individualContainer.textContent = project.name;
    individualContainer.classList.add('individual-project-container');

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-project-button');
    deleteButton.setAttribute('id', `project-${project.id}-delete`);
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', deleteProject);    

    individualContainer.appendChild(deleteButton);
    projectList.appendChild(individualContainer);

    console.log('project: ' + project.name);
    function deleteProject() {
        console.log('delete button pressed');
        console.log(project.name);
        if (confirm(`Are you sure you want to delete ${project.name}?`)) {
            projectArray.splice(project.id-1, 1);
            console.log(projectArray);
            renderProjects();    
        }
        
    }
}

export {renderProjects};