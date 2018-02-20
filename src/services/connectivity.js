import store from '../store';

window.addEventListener('offline', function(e) {
    store.commit('updateConnectivityStatus', false);
});

window.addEventListener('online', function(e) {
    store.commit('updateConnectivityStatus', true);
});
