import Task from '../models/Task';
import Tasklist from '../models/Tasklist';

export default {
    updateTasklists(state, newTasklists) {
        state.tasklists = newTasklists;
    },
    updateTasks(state, {listId, newTasks}) {
        state.tasklists[ listId ].tasks = newTasks;
    },
    addTasklist(state) {
        state.tasklists.push( Tasklist({ tasks: [ Task() ]}) );
    },
    addTask(state, listId) {
        state.tasklists[ listId ].tasks.push(Task({text: 'test title'}));
    },
    removeTasklist(state, index) {
        state.tasklists.splice(index, 1);
    },
    removeTask(state, { listId, taskId }) {
        console.log(listId, taskId);
        state.tasklists[ listId ].tasks.splice(taskId, 1);
    }
};
