import Task from '../models/Task';
import Tasklist from '../models/Tasklist';
import testData from '../data/testData';
import defaultData from '../data/defaultData';

import storage from 'Common/storage/LocalStorage'; 
import config from '../config';

const defaultTasklist = Tasklist({ 
    tasks: [ Task() ] 
});

const defaultAppearance = { 
    appearance: { 
        font: { 
            selected: '16px', 
            options: ['16px', '18px', '20px', '24px'] 
        } 
    } 
};

const { tasklists, appearance } = Object.assign(storage.get(config.appKey), defaultAppearance);

export default {
    auth: { signedIntoDrive: false },
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
