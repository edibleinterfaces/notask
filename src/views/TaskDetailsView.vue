<style lang="scss">

    .task-details-container {
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
        <div class="task-details">
            <task-details 
                :list-id="listId" 
                :task-id="taskId">
            </task-details>
        </div>
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
