import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '../components/LandingPage'
import ListManager from '../components/tasklists/ListManager'
import Oops from '../components/Oops'

Vue.use(Router)

export default new Router({
    mode: 'history',
    html5: true,
    routes: [
        {
            path: '/',
            name: 'landing-page',
            component: LandingPage
        },
        {
            path: '/tasklists',
            name: 'tasklists',
            component: ListManager
        },
        {
            path: '/tasklist/:id',
            name: 'tasklist',
            component: ListManager
        },
        {
            path: '/tasklist/:id/task',
            name: 'task',
            component: ListManager 
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
