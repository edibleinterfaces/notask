export default {
    cloudStorageMethod: (state) => state.storageMethod,
    cloudProvider: (state) => state.cloudProvider,
    syncFileId: (state) => state.store.cloud.googleDrive.syncFile.id,
    tasklists: (state) => state.store[state.storageMethod].tasklists,
    tasks: (state) => (listId) => state.store[state.storageMethod].tasklists[ listId ].tasks,
    task: (state) => ({ listId, taskId }) => state.store[state.storageMethod].tasklists[ listId ].tasks[ taskId ],
    exportFormat: (state) => state.store[state.storageMethod].exportFormat,
    online: (state) => state.store[state.storageMethod].online,
    signedIntoDrive: (state) => state.store[state.storageMethod].cloudSync.signedIntoDrive,
    reminders: (state) => ({listId, taskId }) => state.store[state.storageMethod].tasklists[ listId ].tasks[ taskId ].reminders,
    theme: (state) => state.store[state.storageMethod].appearance.theme.selected,
    themes: (state) => state.store[state.storageMethod].appearance.theme.options,
    fontSize: (state) => state.store[state.storageMethod].appearance.font.selected,
    fontSizes: (state) => state.store[state.storageMethod].appearance.font.options
};
