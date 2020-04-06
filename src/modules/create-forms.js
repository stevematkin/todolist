const generateForm = (function() {
    let body = document.querySelector('body');
    let createProjectButton = document.querySelector('#project-button');
    createProjectButton.addEventListener('click', createNewProject);

    function createNewProject() {
        createProjectForm();
    }

    function createProjectForm() {
        let background = document.createElement('div');
        background.classList.add('modal-background');
        body.style.overflow = 'hidden';
        body.appendChild(background);

        let form = document.createElement('form');
        formInput("text", "project-name", "project-name", "Project Name");

        let buttonContainer = document.createElement('div');

        let submitButton = document.createElement('button');
        submitButton.textContent = 'Create';
        submitButton.type = 'submit';
        buttonContainer.appendChild(submitButton);

        let cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel';
        cancelButton.type = 'button';
        buttonContainer.appendChild(cancelButton);

        form.appendChild(buttonContainer);
        background.appendChild(form);

        function formInput (inputType, inputId, inputName, inputPlaceholder) {
            let projectInput = document.createElement('input');
            projectInput.setAttribute("type", inputType);
            projectInput.setAttribute("id", inputId);
            projectInput.setAttribute("name", inputName);
            projectInput.setAttribute("placeholder", inputPlaceholder);

            form.appendChild(projectInput);
        }
    }
    return createNewProject;

    

})();

export default {generateForm};