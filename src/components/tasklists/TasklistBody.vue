<style>
</style>

<template>
    <div class="tasklist">
        <task-header v-for="task in tasks"></task-header>
    </div>
</template>

<script>
    import TaskHeader from './TaskHeader';

    export default {
        name: 'tasklist-body',
        props: ['tasks'],
        components: {
            TaskHeader
        }
    };
</script>
