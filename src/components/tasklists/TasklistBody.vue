<style>
</style>

<template>
    <div class="tasklist">
        <h1>Tasklist body</h1>
        <task 
        v-for="(task, taskId) in tasks" 
        :task-id="taskId" 
        :list-id="listId">
        </task>
    </div>
</template>

<script>
    import Task from './Task';

    export default {
        name: 'tasklist-body',
        props: ['listId'],
        components: {
            Task
        },
        data: function() {
            return {
                tasks: this.$store.state.tasklists[ this.listId ].tasks
            };
        }
    };
</script>
