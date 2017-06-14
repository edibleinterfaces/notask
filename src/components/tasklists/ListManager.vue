<style>
    .list-manager {
        background: whitesmoke;
        height: calc((100%/6)*5);
        width: 100%;
    }
</style>

<template>
    <div class="list-manager">
        <tasklist v-for="tasklist in tasklists"></tasklist>
    </div>
</template>

<script>

    import Tasklist from './Tasklist';

    export default {
        name: 'list-manager',
        components: { Tasklist },
        data: function() {
            return {
                tasklists: this.$store.state.tasklists
            };
        }
    };

</script>
