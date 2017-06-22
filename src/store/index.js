import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import Task from '../models/Task';
import Tasklist from '../models/Tasklist';

import mutations from './mutations'; 
import getters from './getters'; 
import state from './state';

export default new Vuex.Store({
    state,
    mutations,
    getters
});
