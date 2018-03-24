import store from '../store';

const online = () => store.commit('updateConnectivityStatus', true);
const offline = () => store.commit('updateConnectivityStatus', false);

export function init() {
    window.addEventListener('online', online);
    window.addEventListener('offline', offline);
}
export function destroy() {
    window.removeEventListener('online', online);
    window.removeEventListener('offline', offline);
}

