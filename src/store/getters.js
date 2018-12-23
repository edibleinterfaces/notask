export default {
    tasklists: (state) => state.store[state.storageOption].tasklists,
    tasks: (state) => (listId) => state.store[state.storageOption].tasklists[ listId ].tasks,
    task: (state) => ({ listId, taskId }) => state.store[state.storageOption].tasklists[ listId ].tasks[ taskId ],
    exportFormat: (state) => state.store[state.storageOption].exportFormat,
    online: (state) => state.store[state.storageOption].online,
    signedIntoDrive: (state) => state.store[state.storageOption].cloudSync.signedIntoDrive,
    reminders: (state) => ({listId, taskId }) => state.store[state.storageOption].tasklists[ listId ].tasks[ taskId ].reminders,
    theme: (state) => state.store[state.storageOption].appearance.theme.selected,
    themes: (state) => state.store[state.storageOption].appearance.theme.options,
    fontSize: (state) => state.store[state.storageOption].appearance.font.selected,
    fontSizes: (state) => state.store[state.storageOption].appearance.font.options
};
