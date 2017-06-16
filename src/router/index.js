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
            component: LandingView
        },
        {
            path: '/tasklists',
            component: ListsView
        },
        {
            path: '/tasklist/:listId',
            props: true,
            component: ListView
        },
        {
            path: '/tasklist/:listId/tasks/:taskId',
            props: true,
            component: TaskView
        },
        {
            path: '/settings',
            component: SettingsView,
        },
        {
            path: '/oops',
            component: Oops
        },
        {
            path: '*',
            redirect: '/oops',
        }
    ]
});
