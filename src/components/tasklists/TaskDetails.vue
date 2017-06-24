<template>
    <div class="task-details">
        <task-header></task-header>
        <div class="task-body">Task Details</div>
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
            task: function() {
                store.getters.task(this.listId)
            }
        }
    };
</script>
