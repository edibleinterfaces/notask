import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from '../components/LandingPage';
import SettingsManager from '../components/settings/SettingsManager';
import Appearance from '../components/settings/Appearance';
import Sync from '../components/settings/Sync';
import Storage from '../components/settings/Storage';


import ListManager from '../components/tasklists/ListManager';
import Tasklist from '../components/tasklists/Tasklist';
import Task from '../components/tasklists/Task';

import Oops from '../components/Oops';
import tasklistRoutes from './tasklistRoutes';

Vue.use(Router)

export default new Router({
    mode: 'history',
    html5: true,
    routes: [
        {
            // landing page
            path: '/',
            name: 'landing-page',
            component: LandingPage
        },
        {
            path: '/oops',
            name: 'oops',
            component: Oops
        },
        {
            path: '/tasklists',
            name: 'tasklists',
            component: ListManager
        },
        {
            path: '/tasklist/:listId',
            name: 'tasklist',
            props: true,
            component: Tasklist
        },
        {
            path: '/tasklist/:listId/tasks/:taskId',
            name: 'task',
            props: true,
            component: Task
        },
        {
            path: '/settings',
            name: 'settings',
            component: SettingsManager,
        },
        {
            path: '/settings/appearance',
            name: 'appearance',
            component: Appearance
        },
        {
            path: '/settings/storage',
            name: 'storage',
            component: Storage
        },
        {
            path: '/settings/sync',
            name: 'sync',
            component: Sync
        },
        {
            path: '*',
            redirect: '/oops',
        },
    ]
});
