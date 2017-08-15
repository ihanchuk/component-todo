import angular from 'angular';
import ngAnimate from 'angular-animate';

import appLayout from './layout';
import appTaskList from './layout/TaskList';

import taskListService from './services/task-list-service';

const app = angular.module('app', [ngAnimate]);

app.component('appLayout', new appLayout);
app.component('appTaskList', new appTaskList);

app.service('taskListService', taskListService);

export { app };