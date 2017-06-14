<style>
    .lists-view {
        height: 100%;
        width: 100%;
    }
</style>
<template>
    <div class="lists-view">
        <tasklist-header></tasklist-header>
        <dashboard></dashboard>
    </div>
</template>

<script>
    import TasklistHeader from '../components/tasklists/TasklistHeader.vue';
    import Dashboard from '../components/Dashboard.vue';
    export default {
        name: 'listview',
        components: {
            TasklistHeader,
            Dashboard
        }
    }
</script>
