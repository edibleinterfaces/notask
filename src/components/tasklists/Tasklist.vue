<style>
</style>

<template>
    <div class="tasklist">
        <task></task>
        <router-view></router-view>
    </div>
</template>

<script>
    import Task from './Task';

    export default {
        name: 'tasklist',
        props: ['tasklists'],
        components: {
            Task
        },
        data: function() {
            return {};
        }
    };
</script>
