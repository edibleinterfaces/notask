import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations'; 
import getters from './getters'; 
import state from './state';
import vuejsStorage from 'vuejs-storage';

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    plugins: [
        vuejsStorage({
            storage: localStorage,
            namespace: 'no-task',
            parse: JSON.parse,
            stringify: JSON.stringify
        })
    ],
    mutations,
    getters
});
