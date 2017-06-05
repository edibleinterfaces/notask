<style>
</style>

<template>

    <div class="list-manager">
        <h1>ListManager</h1>
        <h2>route params: {{ $route.params }}</h2>
    </div>

</template>

<script>
    import TaskList from './TaskList';
    import Task from './Task';
    export default {
        data: function() {
            return {};
        }
    };
</script>
