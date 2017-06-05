<style>
</style>

<template>
    <div class="tasklist">
        <h1>task </h1>
        <h1>route params: {{ $route.params.taskId }}</h1>
        <task></task>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'Tasklist',
        data: function() {
            return {};
        }
    };
</script>
