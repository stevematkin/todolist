import "./styles/style.css";
import {createProjectForm, removeModal} from "./modules/create-forms";
import {projectFactory} from "./modules/project";

let projects = [];

const createProjectButton = document.querySelector('#project-button');
createProjectButton.addEventListener('click', createNewProject);

function createNewProject() {
    //duplicating here somehow?
    createProjectForm();

    const submitButton = document.getElementById('submit-project-button');
    submitButton.addEventListener('click', submitProjectForm);
    function submitProjectForm(e) {
        e.preventDefault();
        let input = document.getElementById('project-name').value;
        const newProject = projectFactory(input);
        projects.push(newProject);
        submitButton.removeEventListener('click', submitProjectForm);
        
        removeModal();
        
        console.log(projects);
    }
        
    
}






