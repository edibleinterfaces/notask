<style>
.task-header {
    height: 20%;
}
</style>
<template>
    <div class="task-header">{{ text }}</div>
</template>

<script>
    export default {
        name: 'task-header',
        props: ['text']
    };
</script>
