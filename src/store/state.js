import config from '../config';
import defaultData from '../data/defaultData';
import storage from 'Common/storage/LocalStorage'; 
import Task from '../models/Task';
import { Tasklist, TasklistDefault } from '../models/Tasklist';

const { tasklists, appearance } = storage.get(config.appKey) || defaultData;

export default {
    cloudSync: { signedIntoDrive: false },
    online: navigator.onLine,
    tasklists: tasklists || [TasklistDefault],  // bug 
    export: { format: 'plaintext' },
    appearance: {
        theme: {
            selected: 'icecream',
            options: ['grayscale','icecream']
        },
        font: {
            selected: appearance.font.selected,
            options: appearance.font.options
        }
    }
};
