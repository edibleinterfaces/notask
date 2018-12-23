import Vue from 'vue';
import Vuex from 'vuex';

import Persistence from 'Common/storage';
import NoTaskLocalStorage from './NoTaskLocalStorage';
import mutations from './mutations'; 
import getters from './getters'; 
import state from './state';
import actions from './actions';

Vue.use(Vuex);

console.warn('clearing localstorage while developing!')
window.localStorage.clear()

const store = new Vuex.Store({
    actions,
    getters,
    mutations,
    state,
    strict: true,
    plugins: [ Persistence(new NoTaskLocalStorage()) ]
});

export default store;
