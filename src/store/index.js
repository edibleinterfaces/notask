import Vue from 'vue';
import Vuex from 'vuex';

import Task from '../models/Task';
import Tasklist from '../models/Tasklist';

Vue.use(Vuex);

const demo = {
    tasklists: [
        Tasklist(
            { 
                title: 'A',
                tasks: [ 
                    Task({ text:'Release Album.' }), 
                    Task({ text:'Market Album.' }) 
                ]
            }
        ), 
        Tasklist(
            { 
                title: 'B',
                tasks: [ 
                    Task({ text:'Release Album.' }), 
                    Task({ text:'Market Album.' }) 
                ]
            }
        ), 
        Tasklist(
            { 
                title: 'C',
                tasks: [ 
                    Task({ text:'Release Album.' }), 
                    Task({ text:'Market Album.' }) 
                ]
            }
        )
    ]
};

export default new Vuex.Store({
    state: demo
});
