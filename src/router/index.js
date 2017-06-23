import Vue from 'vue';
import Router from 'vue-router';

import LandingView from '../views/LandingView';
import ListView from '../views/ListView';
import ListsView from '../views/ListsView';
import TaskView from '../views/TaskView';
import TaskDetailsView from '../views/TaskDetailsView';
import SettingsView from '../views/SettingsView';
import StorageView from '../views/StorageView';
import Oops from '../views/Oops';

Vue.use(Router)

export default new Router({
    mode: 'history',
    html5: true,
    routes: [
        {
            path: '/',
            name: 'LandingView',
            component: LandingView
        },
        {
            path: '/tasklists',
            name: 'ListsView',
            props: true,
            component: ListsView
        },
        {
            path: '/tasklist/:listId',
            name: 'ListView',
            props: true,
            component: ListView
        },
        {
            path: '/tasklist/:listId/task/:taskId',
            name: 'TaskView',
            props: true,
            component: TaskView
        },
        {
            path: '/tasklist/:listId/task/:taskId/details',
            props: true,
            name: 'TaskDetailsView',
            component: TaskDetailsView
        },
        {
            path: '/settings',
            name: 'SettingsView',
            component: SettingsView,
        },
        {
            path: '/settings/storage',
            name: 'StorageView',
            component: StorageView
        },
        {
            path: '/settings/sync',
            name: 'SyncView',
            component: SyncView
        },
        {
            path: '/oops',
            name: 'Oops',
            component: Oops
        },
        {
            path: '*',
            redirect: '/oops',
        }
    ]
});
