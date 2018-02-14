import Task from '../models/Task';
import Tasklist from '../models/Tasklist';
import testData from './testData';

export default {
    tasklists: testData.tasklists,
    auth: {
        signedIntoGoogle: false
    },
    online: navigator.onLine,
    theme: 'icecream',
    themes: ['bw','icecream']
};
