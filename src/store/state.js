import Task from '../models/Task';
import Tasklist from '../models/Tasklist';
import localStorage from './localStorage';

localStorage.init();

export default {
    tasklists: localStorage.getTasklists(),
    auth: {
        signedIntoGoogle: false
    },
    online: navigator.onLine
};
