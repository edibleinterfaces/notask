<style>

    .list-view-container {
        overflow-x: hidden;
        height: 100%;
    }
    .list-view {
        width: 100%;
        overflow-x: hidden;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
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
    @media(min-width: 750px) {
        
    }
    @media(max-width: 750px) {
    }

</style>
<template>

    <div class="list-view-container">
        <div class="list-view">
            <tasklist-header :list-id="listId"></tasklist-header>
            <task-header 
                v-model="tasks"
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

    import TasklistHeader from '../components/tasklists/TasklistHeader';
    import TaskHeader from '../components/tasklists/TaskHeader';
    import Dashboard from '../components/Dashboard';

    import store from '../store';

    export default {
        name: 'list-view',
        props: ['listId'],
        components: {
            TasklistHeader,
            TaskHeader,
            Dashboard
        },
        computed: { 
            tasks: {
                get() {
                    return store.getters.tasklists[ this.listId ].tasks;
                },
            }
        },
        methods: { 
            navigateTo: function(path) {
                this.$router.push(path);
            }
        }

    };

</script>
