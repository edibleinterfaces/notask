<style>

    .list-view-container {
        height: 100%;
    }
    .list-view {
        height: 80%;
        width: 100%;
    }

</style>
<template>

    <div class="list-view-container">
        <div class="list-view">
            <task-header 
                v-for="task in tasks" 
                :text="task.text">
            </task-header>
        </div>
        <dashboard></dashboard>
    </div>

</template>
<script>

    import TaskHeader from '../components/tasklists/TaskHeader';
    import Dashboard from '../components/Dashboard';

    export default {
        name: 'list-view',
        props: ['listId'],
        components: {
            TaskHeader,
            Dashboard
        },
        data: function() {
            return {
                tasks: this.$store.state.tasklists[ this.listId ].tasks
            };
        }
    };

</script>
