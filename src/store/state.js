import Task from '../models/Task';
import Tasklist from '../models/Tasklist';
import testData from '../data/testData';
import defaultData from '../data/defaultData';

import storage from 'Common/storage/LocalStorage'; 
import config from '../config';

const { tasklists, appearance } = storage.get(config.appKey) || defaultData;

export default {
    cloudSync: { signedIntoDrive: false },
    online: navigator.onLine,
    tasklists: tasklists || [defaultTasklist],
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
