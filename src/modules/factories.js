import {projectArray} from './project-controller';

const projectFactory = (name) => {
    let id;
    let tasks = [];
    return {name, id, tasks};
}


export {projectFactory};