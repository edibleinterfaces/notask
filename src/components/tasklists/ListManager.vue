<style>
</style>

<template>
    <div class="list-manager">
        <h1>ListManager</h1>
        <h2>route params: {{ $route.params }}</h2>
        <tasklist></tasklist>
        <router-view></router-view>
    </div>
</template>

<script>
    import TaskList from './Tasklist';

    export default {
        data: function() {
            return {};
        }
    };
</script>
