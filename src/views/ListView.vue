<style>

    .list-view-container {
        height: 100%;
    }
    .list-view {
        width: 100%;
    }
    @media(min-height:400px) {
        .list-view {
            height: 90%;
        }
    }
    @media(max-height:400px) {

        .list-view {
            height: 75%;
        }
    }

</style>
<template>

    <div class="list-view-container">
        <div class="list-view">
            <task-header 
                v-for="(task, taskId) in tasks" 
                v-on:navigate="navigateTo"
                :list-id="listId"
                :task-id="taskId"
                :key="taskId"
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
        },
        methods: { 
            navigateTo: function(path) {
                this.$router.push(path);
            }
        }

    };

</script>
