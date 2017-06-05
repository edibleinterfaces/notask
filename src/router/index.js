import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from '../components/LandingPage';
import ListManager from '../components/tasklists/ListManager';
import Tasklist from '../components/tasklists/Tasklist';
import Task from '../components/tasklists/Task';
import TaskDetails from '../components/tasklists/TaskDetails';
import Oops from '../components/Oops';

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
            // all tasklists
            path: '/tasklists',
            component: ListManager,
            children: [
                {
                    // single tasklist
                    path: '/tasklist/:listId',
                    component: Tasklist,
                    children: [
                        {
                            // single task
                            path: '/tasklist/:listId/task/:taskId',
                            name: 'task',
                            component: Task, 
                            children: [
                                {
                                    // task details
                                    path: '/tasklist/:listId/task/:taskId/details',
                                    name: 'task',
                                    component: TaskDetails 
                                }
                            ]
                        }
                    ]
                }
            ]
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
