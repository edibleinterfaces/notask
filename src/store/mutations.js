import Task from '../models/Task';
import Tasklist from '../models/Tasklist';

export default {

    /* tasklist & task data */

    resetStorage(state) {
        state.tasklists = [ Tasklist({ tasks: [ Task() ]}) ];
    },
    clearTasklists(state) {
        state.tasklists = [];
    },
    addTasklist(state) {
        state.tasklists.push( Tasklist({ tasks: [ Task() ]}) );
    },
    removeTasklist(state, index) {
        state.tasklists.splice(index, 1);
        if (!state.tasklists.length) {
            state.tasklists.push( Tasklist({ tasks: [ Task() ]}) );
        }
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
        state.tasklists[ listId ].tasks.splice(taskId, 1);
    },
    updateTaskText(state, { listId, taskId, text }) {
        state.tasklists[ listId ].tasks[ taskId ].text = text;
    },
    updateTaskDetails(state, { listId, taskId, details }) {
        state.tasklists[ listId ].tasks[ taskId ].details = details;
    },
    updateReminders(state, { listId, taskId, reminderData }) {
        state.tasklists[ listId ].tasks[ taskId ].reminders.push(reminderData);
    },
    deleteReminder(state, { reminderIndex, listId, taskId}) {
        state.tasklists[ listId ].tasks[ taskId ].reminders.splice(reminderIndex, 1);
    }, 
    updateTheme(state, newTheme) {
        state.theme = newTheme;
        console.log(state.theme);
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
