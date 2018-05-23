import config from '../config';
import defaults from '../data/defaults';
import storage from 'Common/storage/LocalStorage'; 

const store = storage.get(config.appKey) || defaults;
export default store;
