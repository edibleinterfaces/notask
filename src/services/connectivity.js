import store from '../store';

window.addEventListener('offline', function(e) {
    console.log('offline');
    store.commit('updateConnectivityStatus', false);
});

window.addEventListener('online', function(e) {
    console.log('online');
    store.commit('updateConnectivityStatus', true);
});
