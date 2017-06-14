import Vue from 'vue';
import Router from 'vue-router';

import LandingView from '../views/LandingView';
import ListView from '../views/ListView';
import ListsView from '../views/ListsView';
import TaskView from '../views/TaskView';
import SettingsView from '../views/SettingsView';
import Oops from '../views/Oops';

Vue.use(Router)

export default new Router({
    mode: 'history',
    html5: true,
    routes: [
        {
            path: '/',
            name: 'landing-page',
            component: LandingView
        },
        {
            path: '/tasklists',
            name: 'tasklists',
            component: ListsView
        },
        {
            path: '/tasklist/:listId',
            name: 'tasklist',
            props: true,
            component: ListView
        },
        {
            path: '/tasklist/:listId/tasks/:taskId',
            name: 'task',
            props: true,
            component: TaskView
        },
        {
            path: '/settings',
            name: 'settings',
            component: SettingsView,
        },
        {
            path: '/oops',
            name: 'oops',
            component: Oops
        },
        {
            path: '*',
            redirect: '/oops',
        },
    ]
});
