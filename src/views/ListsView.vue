<style>
    .lists-view-container {
        height: 100%; 

    }
    .lists-view {
        height: 80%;
        width: 100%;
    }
</style>
<template>
    <div class="lists-view-container">
        <div class="lists-view">
            <tasklist-header 
                v-for="(tasklist, index) in tasklists" 
                :title="tasklist.title">
            </tasklist-header>
        </div>
        <dashboard></dashboard>
    </div>
</template>

<script>
    import TasklistHeader from '../components/tasklists/TasklistHeader.vue';
    import Dashboard from '../components/Dashboard.vue';
    export default {
        name: 'listview',
        components: {
            TasklistHeader,
            Dashboard
        },
        data: function() {
            return {
                tasklists: this.$store.state.tasklists
            };
        }

    }
</script>
