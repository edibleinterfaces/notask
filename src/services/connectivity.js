import store from '../store';

store.dispatch('UPDATE_ONLINE_STATUS', navigator.onLine);

window.addEventListener('offline', function(e) {
    store.dispatch('UPDATE_ONLINE_STATUS', false);
});

window.addEventListener('online', function(e) {
    store.dispatch('UPDATE_ONLINE_STATUS', true);
});
