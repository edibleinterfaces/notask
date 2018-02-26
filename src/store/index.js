import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations'; 
import getters from './getters'; 
import state from './state';
import vuejsStorage from 'vuejs-storage';

//import Persistence from 'Common/storage';

Vue.use(Vuex);

export default new Vuex.Store({
    //plugins: [ Persistence({ namespace: 'notask' }) ],
    state,
    mutations,
    getters
});
