<style lang="scss">
    .list-view-outer-container {
        height: 100%;
        overflow-x: hidden;
        .list-view-inner-container {
            height: 90%;
        }
    }
    .list-view {
        width: 100%;
        overflow-x: hidden;
        -webkit-overflow-scrolling: touch;
    }
    @media(min-height:400px) {
        .list-view {
            height: 80%;
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

    <div class="list-view-outer-container">
        <div class="list-view-inner-container">
            <tasklist-header :list-id="listId"></tasklist-header>
            <draggable
                :options="{ handle: '.sort-handle', draggable: '.task-header'}"
                v-model="tasks"
                class="list-view">
                <task-header 
                    v-on:navigate="navigateTo"
                    v-for="(task, taskId) in tasks" 
                    v-model="tasks"
                    :key="taskId"
                    :list-id="listId"
                    :task-id="taskId"
                    :text="task.text">
                </task-header>
            </draggable>
        </div>
        <app-dashboard :list-id="listId"></app-dashboard>
    </div>

</template>
<script>

    import TasklistHeader from '../components/tasklists/TasklistHeader';
    import TaskHeader from '../components/tasklists/TaskHeader';
    import AppDashboard from '../components/Dashboard';
    import draggable from 'vuedraggable';

    import store from '../store';

    export default {
        name: 'list-view',
        props: ['listId'],
        components: {
            TasklistHeader,
            TaskHeader,
            AppDashboard,
            draggable
        },
        computed: { 
            tasks: {
                get() {
                    return store.getters.tasks(this.listId);
                },
                set(newTasks) {
                    const payload = {
                        listId: this.listId,
                        newTasks
                    };
                    store.commit('updateTasks', payload);
                }
            }
        },
        methods: { 
            navigateTo(path) {
                this.$router.push(path);
            },
        }

    };

</script>
