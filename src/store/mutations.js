import Task from '../models/Task';
import Tasklist from '../models/Tasklist';
import LocalStorage from './localStorage';

export default {

    /* tasklist & task data */

    addTasklist(state) {
        state.tasklists.push( Tasklist({ tasks: [ Task() ]}) );
    },
    removeTasklist(state, index) {
        state.tasklists.splice(index, 1);
    },
    updateTasklistTitle(state, { listId, title }) {
        state.tasklists[ listId ].title = title;
    },
    updateTasklists(state, newTasklists) {
        state.tasklists = newTasklists;
    },
    updateTasks(state, {listId, newTasks}) {
        state.tasklists[ listId ].tasks = newTasks;
    },
    addTask(state, listId) {
        state.tasklists[ listId ].tasks.push(Task({text: 'test title'}));
    },
    removeTask(state, { listId, taskId }) {
        console.log(listId, taskId);
        state.tasklists[ listId ].tasks.splice(taskId, 1);
    },
    updateTaskText(state, { listId, taskId, text }) {
        state.tasklists[ listId ].tasks[ taskId ].text = text;
    },

    /* google drive authentication */
    updateSigninStatus(state, isSignedIn) {
        state.auth.signedIntoGoogle = isSignedIn;
    },

    /* internet connectivity */
    updateConnectivityStatus(state, isOnline) {
        state.online = isOnline;
    }
};
