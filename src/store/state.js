import config from '../config';
import makeDefaults from '../data/defaults';
import LocalStorage from 'Common/storage/LocalStorage'; 

export default (new LocalStorage()).get(config.appKey) || makeDefaults();
