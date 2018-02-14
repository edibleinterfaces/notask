export default {
    tasklists: (state) => state.tasklists,
    tasks: (state) => (listId) => state.tasklists[ listId ].tasks,
    task: (state) => ({ listId, taskId }) => state.tasklists[ listId ].tasks[ taskId ],
    online: (state) => state.online,
    reminders: (state) => ({listId, taskId }) => state.tasklists[ listId ].tasks[ taskId ].reminders,
    themes: (state) => state.themes,
    theme: (state) => state.theme
};
