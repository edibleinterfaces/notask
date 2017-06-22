export default {
    tasklists: (state) => state.tasklists,
    tasks: (state) => (listId) => state.tasklists[ listId ].tasks
};
