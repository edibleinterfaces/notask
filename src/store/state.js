import Task from '../models/Task';
import Tasklist from '../models/Tasklist';
import localStorage from './localStorage';

export default {
    tasklists: localStorage.getTasklists()
};
