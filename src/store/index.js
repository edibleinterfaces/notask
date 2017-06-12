import Vue from 'vue';
import Vuex from 'vuex';

import Task from '../models/Task';
import Tasklist from '../models/Tasklist';

Vue.use(Vuex);

const store = {
    state: {
        tasklists: [ Tasklist({ tasks: [ Task() ]  }) ]
    },
};

export default {
    store
};
