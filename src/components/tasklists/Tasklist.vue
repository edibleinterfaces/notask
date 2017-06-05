<style>
</style>

<template>
    <div class="tasklist">
        <h1>tasklist {{ $route.params.taskId }}</h1>
        <task></task>
        <router-view></router-view>
    </div>
</template>

<script>
    import Task from './Task';

    export default {
        name: 'tasklist',
        components: {
            Task
        },
        data: function() {
            return {};
        }
    };
</script>
