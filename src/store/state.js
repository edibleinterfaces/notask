import config from '../config';
import defaults from '../data/defaults';
import storage from 'Common/storage/LocalStorage'; 

const store = storage.get(config.appKey) || defaults;
console.log(JSON.stringify(store, null, 2));

export default store;
/*
{
    appearance,
    cloudSync: { signedIntoDrive: false },
    export: { format: 'plaintext' },
    online: navigator.onLine,
    tasklists
};
*/
