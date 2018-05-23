import config from '../config';
import makeDefaults from '../data/defaults';
import storage from 'Common/storage/LocalStorage'; 

const store = storage.get(config.appKey) || makeDefaults();

export default store;
