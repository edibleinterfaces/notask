import Task from '../models/Task'
import Tasklist from '../models/Tasklist'
import makeDefaults, { makeDefaultTasklists } from '../data/defaults'
import NoTaskLocalStorage from './NoTaskLocalStorage'

const listComparator = (a,b) => a.complete - b.complete

export default {

    /* tasklist & task data */

    resetStore(state) {
        // update state, will update storage accordingly
        const currentStorageOption = state.storageOption
        const { store } = makeDefaults()
        state.store = store[currentStorageOption]

    },
    resetTasklists(state) {
        state.store[state.storageOption].tasklists = makeDefaultTasklists()
    },
    addTasklist(state) {
        state.store[state.storageOption].tasklists.push( Tasklist({ tasks: [ Task() ]}) )
    },
    removeTasklist(state, index) {
        state.store[state.storageOption].tasklists.splice(index, 1)
        if (!state.store[state.storageOptions].tasklists.length) {
            state.store[state.storageOption].tasklists.push( Tasklist({ tasks: [ Task() ]}) )
        }
    },
    updateTasklistTitle(state, { listId, title }) {
        state.store[state.storageOption].tasklists[ listId ].title = title
    },
    sortTasklist(state, tasklistId) {
        state.store[state.storageOption].tasklists[ tasklistId ] .tasks.sort(listComparator)
    }, 
    updateTasklists(state, newTasklists) {
        state.store[state.storageOption].tasklists = newTasklists
    },
    updateTasks(state, {listId, newTasks}) {
        state.store[state.storageOption].tasklists[ listId ].tasks = newTasks
    },
    addTask(state, listId) {
        state.store[state.storageOption].tasklists[ listId ].tasks.push(Task({text: 'New Task'}))
    },
    removeTask(state, { listId, taskId }) {
        state.store[state.storageOption].tasklists[ listId ].tasks.splice(taskId, 1)
    },
    updateTaskText(state, { listId, taskId, text }) {
        state.store[state.storageOption].tasklists[ listId ].tasks[ taskId ].text = text
    },
    updateTaskDetails(state, { listId, taskId, details }) {
        state.store[state.storageOption].tasklists[ listId ].tasks[ taskId ].details = details
    },
    updateReminders(state, { listId, taskId, reminderData }) {
        state.store[state.storageOption].tasklists[ listId ].tasks[ taskId ].reminders.push(reminderData)
    },
    deleteReminder(state, { reminderIndex, listId, taskId}) {
        state.store[state.storageOption].tasklists[ listId ].tasks[ taskId ].reminders.splice(reminderIndex, 1)
    }, 
    toggleTaskComplete(state, { listId, taskId, complete }) {
        state.store[state.storageOption].tasklists[ listId ].tasks[ taskId ].complete = complete
    },
    updateTheme(state, newTheme) {
        state.store[state.storageOption].appearance.theme.selected = newTheme
    },
    updateFontSize(state, newSize) {
        state.store[state.storageOption].appearance.font.selected = newSize
    },
    markTasklistOld(state, listId) {
        state.store[state.storageOption].tasklists[ listId ].isNew = false 
    },

    /* google drive authentication */
    updateSigninState(state, signedIn) {
        state.store[state.storageOption].cloudSync.signedIntoDrive = signedIn
    },

    /* internet connectivity */
    updateConnectivityStatus(state, isOnline) {
        state.store[state.storageOption].online = isOnline
    },
    updateSyncFileId(state, { id }) {
    }
}
