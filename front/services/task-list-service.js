class taskListService{

    constructor(){
        this.id=5;
        this.prevTaskName = null;
        this.tasks = [
            {id:1, name:'Set UP CI', completed: false},
            {id:3, name:'Learn Redux', completed: false},
            {id:2, name:'Bugfix my code', completed: true},
            {id:5, name:'Visit Angular Meetup', completed: false},
            {id:4, name:'Learn RXJS', completed: true},
        ];
    }

    /**
     *
     * @returns {Array|*[]}
     */
    getTasks(){
        return this.tasks;
    }

    /**
     *
     * @param taskName
     */
    addTask(taskName){
        if(this.prevTaskName !== taskName && taskName.length > 0) {
            this.tasks.push({id:++this.id, name: taskName, completed: false});
            this.prevTaskName = taskName;
        }
    }

    /**
     *
     * @param task
     */
    removeTask(task){
        let pos = this.tasks.indexOf(task);
        if(pos !== -1) this.tasks.splice(pos, 1);
    }

    /**
     *
     * @param task
     */
    changeTaskStatus(task){
        let pos = this.tasks.indexOf(task);
        if(pos !== -1) this.tasks[pos].completed=!this.tasks[pos].completed;
    }

}

export default taskListService;

