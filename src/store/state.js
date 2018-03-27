import Task from '../models/Task';
import Tasklist from '../models/Tasklist';
import testData from './testData';

import storage from 'Common/storage/LocalStorage'; 
import config from '../config';

const defaultTasklist = Tasklist({ tasks: [ Task() ] });
const { tasklists, appearance } = storage.get(config.appKey);
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
