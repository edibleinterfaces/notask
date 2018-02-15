import Task from '../models/Task';
import Tasklist from '../models/Tasklist';
import testData from './testData';

export default {
    tasklists: testData.tasklists,
    auth: {
        signedIntoGoogle: false
    },
    online: navigator.onLine,
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
