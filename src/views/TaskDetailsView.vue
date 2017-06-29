<style lang="scss">

    .task-details-container {
        overflow-x: hidden;
        height: 100%;
        width: 100%;
        .task-details {
            height: 90%;
            width: 100%;
        }
    }

</style>
<template>

    <div class="task-details-container">
        <task-details 
            :list-id="listId" 
            :task-id="taskId">
        </task-details>
        <dashboard></dashboard>
    </div>

</template>
<script>

    import TaskDetails from '../components/tasklists/TaskDetails';
    import Dashboard from '../components/Dashboard';

    export default {
        name: 'list-view',
        props: ['listId', 'taskId'],
        components: {
            TaskDetails,
            Dashboard
        }
    };

</script>
