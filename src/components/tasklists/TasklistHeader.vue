<style></style>

<template>
    <div class="tasklist-header">
        Tasklist Header: {{ title }}
    </div>
</template>

<script>

    export default {
        name: 'tasklist-header',
        props: ['listId'],
        data: function() {
            return {
                title: this.$store.state.tasklists[ this.listId ].title 
            };
        }
    };

</script>
