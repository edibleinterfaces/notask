import Task from '../models/Task';
import Tasklist from '../models/Tasklist';

export default {
    updateTasklists(state, newTasklists) {
        state.tasklists = newTasklists;
    },
    addTasklist(state) {
        state.tasklists.push( Tasklist({ tasks: [Task]} ) );
    },
    removeTasklist(state, index) {
        state.tasklists.splice(index, 1);
    }
};
