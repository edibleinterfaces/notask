<style>

    .list-view {
        height: 100%;
        width: 100%;
    }

</style>
<template>

    <div class="list-view">
        <tasklist-body></tasklist-body>
        <dashboard></dashboard>
    </div>

</template>
<script>

    import TasklistBody from '../components/tasklists/TasklistBody'; 
    import Dashboard from '../components/Dashboard';

    export default {
        name: 'list-view',
        components: {
            TasklistBody,
            Dashboard
        }
    };

</script>
