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
    export default {
        name: 'tasklist',
        data: function() {
            return {};
        }
    };
</script>
