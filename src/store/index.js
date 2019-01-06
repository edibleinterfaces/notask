import Vue from 'vue';
import Vuex from 'vuex';

import Persistence from 'Common/storage';
import NoTaskLocalStorage from './NoTaskLocalStorage';
import mutations from './mutations'; 
import getters from './getters'; 
import actions from './actions';
import makeDefaults from '../data/defaults'

Vue.use(Vuex);

const env = /.*edibleinterfaces.com/.test(window.location.hostname) ? 'prod' : 'dev';                                                                                              
if (env === 'dev') {
  console.warn('WARNING: clearing localstorage on each reload while in DEV mode!')
  window.localStorage.clear()
}

const storageInstance = new NoTaskLocalStorage('notask', makeDefaults())
const store = new Vuex.Store({
    actions,
    getters,
    mutations,
    state: storageInstance.data,
    strict: true,
    plugins: [ Persistence(storageInstance) ]
});

export default store;
