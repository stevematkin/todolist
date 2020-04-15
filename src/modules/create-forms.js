const body = document.querySelector('body');
const background = document.createElement('div');

function createProjectForm() {
    

    
    background.classList.add('modal-background');
    body.style.overflow = 'hidden';
    body.appendChild(background);
    

    const form = document.createElement('form');
    formInput("text", "project-name", "project-name", "Project Name");

    const buttonContainer = document.createElement('div');

    const createButton = document.createElement('button');
    createButton.textContent = 'Create';
    createButton.type = 'submit';
    createButton.setAttribute("id", "submit-project-button");
    buttonContainer.appendChild(createButton);

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.type = 'button';
    buttonContainer.appendChild(cancelButton);

    form.appendChild(buttonContainer);
    form.setAttribute("id", "project-form");
    background.appendChild(form);

    function formInput (inputType, inputId, inputName, inputPlaceholder) {
        const projectInput = document.createElement('input');
        projectInput.setAttribute("type", inputType);
        projectInput.setAttribute("id", inputId);
        projectInput.setAttribute("name", inputName);
        projectInput.setAttribute("placeholder", inputPlaceholder);

        form.appendChild(projectInput);
    }
    
            
}
//FIGURE OUT WHY FORM IS MULTIPLYING!!!!!
function removeModal() {
    //document.getElementById('project-form').reset();
    body.style.overflow = 'visible';
    body.removeChild(background);
}







export {createProjectForm, removeModal};