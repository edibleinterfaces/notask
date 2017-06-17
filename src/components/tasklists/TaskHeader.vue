<style>
.task-header {
    height: calc(90%/5);
}
</style>
<template>
    <div 
        v-on:click="navigate"
        class="task-header">{{ text }}</div>
</template>

<script>
    export default {
        name: 'task-header',
        props: ['text', 'listId', 'taskId'],
        methods: {
            navigate: function() {
                this.$emit('navigate', `/tasklist/${ this.listId }/task/${ this.taskId }/details`);
            }
        }
    };
</script>
