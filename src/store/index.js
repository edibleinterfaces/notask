import Vue from 'vue';
import Vuex from 'vuex';

import Task from '../models/Task';
import Tasklist from '../models/Tasklist';

Vue.use(Vuex);

const demo = {
    tasklists: [
        Tasklist(
            { 
                title: 'Work',
                tasks: [ 
                    Task({ text:'Convert site to mobile friendly!' }), 
                    Task({ text:'sass -> scss' }) 
                ]  
            }
        ),
        Tasklist(
            { 
                title: 'Music',
                tasks: [ 
                    Task({ text:'Release Album.' }), 
                    Task({ text:'Market Album.' }) 
                ]
            }
        ), 
    ]
};

export default new Vuex.Store({
    state: demo
});
