export default {
    tasklists: (state) => state.tasklists,
    tasks: (state) => (listId) => state.tasklists[ listId ].tasks,
    task: (state) => ({ listId, taskId }) => state.tasklists[ listId ].tasks[ taskId ],
    online: (state) => state.online,
    signedIntoDrive: (state) => state.auth.signedIntoDrive,
    reminders: (state) => ({listId, taskId }) => state.tasklists[ listId ].tasks[ taskId ].reminders,
    theme: (state) => state.appearance.theme.selected,
    themes: (state) => state.appearance.theme.options,
    fontSize: (state) => state.appearance.font.selected,
    fontSizes: (state) => state.appearance.font.options
};
