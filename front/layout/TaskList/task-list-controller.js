class taskListController{
    constructor(taskListService){
        this.taskListService = taskListService;
        this.tasksFilteringParam = false;
        this.tasksSortOrder = 'name';
        this.newTask = '';
    }
}

taskListController.$inject=['taskListService'];

export default taskListController;
