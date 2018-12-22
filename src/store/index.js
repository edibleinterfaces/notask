import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations'; 
import getters from './getters'; 
import state from './state';
import actions from './actions';
import vuejsStorage from 'vuejs-storage';

import Persistence from 'Common/storage';

Vue.use(Vuex);

const store = new Vuex.Store({
    actions,
    getters,
    mutations,
    state,
    strict: true,
    plugins: [ Persistence({ namespace: 'notask' }) ],
});

export default store;
