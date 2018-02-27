import Task from '../models/Task';
import Tasklist from '../models/Tasklist';
import testData from './testData';

import storage from 'Common/storage/LocalStorage'; 
import config from '../config';

const defaultTasklist = Tasklist({ tasks: [ Task() ] });
const { tasklists } = storage.get(config.appKey);
export default {
    auth: { signedIntoGoogle: false },
    online: navigator.onLine,
    tasklists: tasklists || [defaultTasklist],
    appearance: {
        theme: {
            selected: 'icecream',
            options: ['grayscale','icecream']
        },
        font: {
            selected: '16px',
            options: ['16px', '18px', '20px', '24px']
        }
    }
};
