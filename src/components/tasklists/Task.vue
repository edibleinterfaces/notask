<style></style>

<template>
    <div class="task">
        <task-header :list-id="listId" :task-id="taskId" />
        <task-body :list-id="listId" :task-id="taskId" />
    </div>
</template>

<script>
    import TaskHeader from './TaskHeader';
    import TaskBody from './TaskBody';

    export default {
        name: 'task',
        props: ['taskId','listId'],
        components: { TaskHeader, TaskBody },
        data: function() {
            return {};
        }
    };
</script>
