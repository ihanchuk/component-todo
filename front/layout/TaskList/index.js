import template from './task-list.html';
import './task-list.scss';
import taskListController from './task-list-controller';

class appTaskList{
    constructor(){
        this.template = template;
        this.controller = taskListController;
    }
}

export default appTaskList;





