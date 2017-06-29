export default {
    tasklists: (state) => state.tasklists,
    tasks: (state) => (listId) => state.tasklists[ listId ].tasks,
    task: (state) => ({ listId, taskId }) => state.tasklists[ listId ].tasks[ taskId ]

};
