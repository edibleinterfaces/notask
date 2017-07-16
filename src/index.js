import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import connectivity from './services/connectivity';

Vue.config.productionTip = false;

const app = new Vue({

    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }

});
