import {projectFactory} from './factories';
import {removeModal} from './create-forms';
import {renderProjects} from './dom-manipulation';


let projectArray = [];
let exampleProject = projectFactory('Example Project');
projectArray.push(exampleProject);

function createNewProject() {
    const background = document.querySelector('.modal-background');
    background.style.display = 'flex';
    
    const submitButton = document.getElementById('submit-project-button');
    submitButton.addEventListener('click', submitProjectForm);
    
    const cancelButton = document.getElementById('cancel-project-button');        
    cancelButton.addEventListener('click', cancelProjectForm);
    
}

function submitProjectForm(e) {
        e.preventDefault();
        const input = document.getElementById('project-name').value;
        if (input !== '') {
            let newProject = projectFactory(input);
            console.log(`new project added: ${newProject.name}`);
            projectArray.push(newProject);
            console.log(projectArray);
            renderProjects();    
            removeModal();
        }
                
}

function cancelProjectForm() {
    const background = document.querySelector('.modal-background');
    background.style.display = 'none';
    console.log(projectArray);
}

function updateProjectId() {
    
}








export {createNewProject, projectArray};

