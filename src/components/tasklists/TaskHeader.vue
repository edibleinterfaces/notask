<template>
    <div class="task-header">
        {{ text }}
    </div>
</template>

<script>
    export default {
        name: 'task-header',
        props: ['listId','taskId'],
        data: function() {
            return {
                text: this.$store.state.tasklists[ this.listId ].tasks[ this.taskId ].text
            };
        }
    };
</script>
