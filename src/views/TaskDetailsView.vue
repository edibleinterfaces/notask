<style>

    .task-details-container {
        height: 100%;
        width: 100%;
    }

</style>
<template>

    <div class="task-details-container">
        <task-details></task-details>
        <dashboard></dashboard>
    </div>

</template>
<script>

    import TaskDetails from '../components/tasklists/TaskDetails';
    import Dashboard from '../components/Dashboard';

    export default {
        name: 'list-view',
        components: {
            TaskDetails,
            Dashboard
        }
    };

</script>
