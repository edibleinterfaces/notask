import Task from '../models/Task'
import Tasklist from '../models/Tasklist'
import makeDefaults, { makeDefaultTasklists } from '../data/defaults'

const listComparator = (a,b) => a.complete - b.complete

export default {

    /* tasklist & task data */

    resetLocalStore(state) {
        // update state, will update storage accordingly
        const currentStorageMethod = state.storageMethod
        const { store } = makeDefaults()
        state.store = store.local

    },
    resetCloudStore(state) {
        // update state, will update storage accordingly
        const currentStorageMethod = state.storageMethod
        const { store } = makeDefaults()
        state.store = store.cloud

    },
    resetTasklists(state) {
        state.store[state.storageMethod].tasklists = makeDefaultTasklists()
    },
    addTasklist(state) {
        state.store[state.storageMethod].tasklists.push( Tasklist({ tasks: [ Task() ]}) )
    },
    removeTasklist(state, index) {
        state.store[state.storageMethod].tasklists.splice(index, 1)
        if (!state.store[state.storageMethods].tasklists.length) {
            state.store[state.storageMethod].tasklists.push( Tasklist({ tasks: [ Task() ]}) )
        }
    },
    updateTasklistTitle(state, { listId, title }) {
        state.store[state.storageMethod].tasklists[ listId ].title = title
    },
    sortTasklist(state, tasklistId) {
        state.store[state.storageMethod].tasklists[ tasklistId ] .tasks.sort(listComparator)
    }, 
    updateTasklists(state, newTasklists) {
        state.store[state.storageMethod].tasklists = newTasklists
    },
    updateTasks(state, {listId, newTasks}) {
        state.store[state.storageMethod].tasklists[ listId ].tasks = newTasks
    },
    addTask(state, listId) {
        state.store[state.storageMethod].tasklists[ listId ].tasks.push(Task({text: 'New Task'}))
    },
    removeTask(state, { listId, taskId }) {
        state.store[state.storageMethod].tasklists[ listId ].tasks.splice(taskId, 1)
    },
    updateTaskText(state, { listId, taskId, text }) {
        state.store[state.storageMethod].tasklists[ listId ].tasks[ taskId ].text = text
    },
    updateTaskDetails(state, { listId, taskId, details }) {
        state.store[state.storageMethod].tasklists[ listId ].tasks[ taskId ].details = details
    },
    updateReminders(state, { listId, taskId, reminderData }) {
        state.store[state.storageMethod].tasklists[ listId ].tasks[ taskId ].reminders.push(reminderData)
    },
    deleteReminder(state, { reminderIndex, listId, taskId}) {
        state.store[state.storageMethod].tasklists[ listId ].tasks[ taskId ].reminders.splice(reminderIndex, 1)
    }, 
    toggleTaskComplete(state, { listId, taskId, complete }) {
        state.store[state.storageMethod].tasklists[ listId ].tasks[ taskId ].complete = complete
    },
    updateTheme(state, newTheme) {
        state.store[state.storageMethod].appearance.theme.selected = newTheme
    },
    updateFontSize(state, newSize) {
        state.store[state.storageMethod].appearance.font.selected = newSize
    },
    markTasklistOld(state, listId) {
        state.store[state.storageMethod].tasklists[ listId ].isNew = false 
    },

    /* google drive authentication */
    updateSigninState(state, signedIn) {
        state.storageMethod = signedIn ? 'cloud' : 'local'
        state.cloudSync.signedIntoCloud = signedIn
    },

    /* internet connectivity */
    updateConnectivityStatus(state, isOnline) {
      console.log(isOnline)
        state.online = isOnline
    },
    setCloudStorageMethod(state, newMethod) {
      state.storageMethod = newMethod
    },
    syncCloudData(state, { content, id }) {
      const updates = JSON.parse(content)
      state.store.cloud = updates.store.cloud
      state.store.cloud.googleDrive.syncFile.id = id
    }
}
