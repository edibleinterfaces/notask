<style>

    .task-view {
        height: 100%;
        width: 100%;
    }

</style>
<template>

    <div class="task-view">
        <task-body></task-body>
        <dashboard></dashboard>
    </div>

</template>
<script>

    import TaskBody from '../components/tasklists/TaskBody';
    import Dashboard from '../components/Dashboard';

    export default {
        name: 'list-view',
        components: {
            TaskBody,
            Dashboard
        }
    };

</script>
