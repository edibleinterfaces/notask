<template>
    <div class="task-details">
        <task-header :text="task.text"></task-header>
        <div class="task-body">{{ task.details }}</div>
    </div>
</template>

<script>
    import store from '../../store';
    import TaskHeader from './TaskHeader';

    export default {
        name: 'task-details',
        props: ['listId','taskId'],
        components: {
            TaskHeader
        },
        computed: {
            task() {
                //return store.state.tasklists[ this.listId ].tasks[ this.taskId ];
                return store.getters.task({ listId: this.listId, taskId: this.taskId});

            } 
        },
    };
</script>
