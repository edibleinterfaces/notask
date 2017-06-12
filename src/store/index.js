import Vue from 'vue';
import Vuex from 'vuex';

import Task from '../models/Task';
import Tasklist from '../models/Tasklist';

Vue.use(Vuex);

export default new Vuex.Store({

    state: {
        tasklists: [ 
            Tasklist({ 
                tasks: [ Task() ]  
            }), 
            Tasklist({ 
                tasks: [ Task() ]  
            }), 
            Tasklist({ 
                tasks: [ Task() ]  
            }), 
            Tasklist({ 
                tasks: [ Task() ]  
            }), 
        ],
    }

});
