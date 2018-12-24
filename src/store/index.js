import Vue from 'vue';
import Vuex from 'vuex';

import Persistence from 'Common/storage';
import NoTaskLocalStorage from './NoTaskLocalStorage';
import mutations from './mutations'; 
import getters from './getters'; 
import state from './state';
import actions from './actions';

Vue.use(Vuex);

const env = /.*edibleinterfaces.com/.test(window.location.hostname) ? 'prod' : 'dev';                                                                                              
if (env === 'dev') {
  console.warn('WARNING: clearing localstorage on each reload while in DEV mode!')
  window.localStorage.clear()
}

const store = new Vuex.Store({
    actions,
    getters,
    mutations,
    state,
    strict: true,
    plugins: [ Persistence(new NoTaskLocalStorage()) ]
});

export default store;
