import './styles/style.css';
import {createProjectModal, removeModal} from './modules/create-forms';
import {createNewProject, projectArray, deleteProject} from './modules/project-controller';
import {projectFactory} from './modules/factories';
import {renderProjects} from './modules/dom-manipulation';

createProjectModal();
renderProjects();



const createProjectButton = document.querySelector('#project-button');
createProjectButton.addEventListener('click', createNewProject);

// const deleteProjectButton = document.querySelectorAll('.delete-project-button');
// deleteProjectButton.forEach(deleteProjectButton => {
//     deleteProjectButton.addEventListener('click', deleteProject);
// });






