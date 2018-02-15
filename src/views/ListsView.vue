<style lang="scss">
    .lists-view-container {
        height: 100%;
        width: 100%;
        overflow-x: hidden; 
        ::-webkit-scrollbar {
            display: none;
        }
        > .lists-view { 
            position: relative;
            width: 100%;
            overflow-y: scroll;
            overflow-x: hidden; 
            -webkit-overflow-scrolling: touch;
        }
    }
    @media (max-height: 400px){
        .lists-view {
            height: 75%;
        }
    }
    @media (min-height: 400px){
        .lists-view {
            height: 90%;
        }
    }
</style>
<template>
    <div class="lists-view-container">
        <draggable 
            :options="{ 
                handle: '.sort-handle', 
                draggable: '.tasklist-header' 
            }"
            v-model="tasklists" 
            class="lists-view">
            <tasklist-header 
                v-for="(tasklist, listId) in tasklists" 
                v-on:navigate="navigate"
                :list-id="listId"
                :title="tasklist.title"
                :key="listId">
            </tasklist-header>
            <progress-bar :value="progressBarWidth" />
        </draggable>
        <dashboard></dashboard>
    </div>
</template>

<script>

    import TasklistHeader from '../components/tasklists/TasklistHeader.vue';
    import Dashboard from '../components/Dashboard.vue';
    import draggable from 'vuedraggable';
    import store from '../store';
    import ProgressBar from '../components/ProgressBar';

    export default {
        name: 'listview',
        components: { TasklistHeader, Dashboard, draggable, ProgressBar },
        props: ['listId', 'taskId'],
        computed: {
            tasklists: {
                get() {
                    return store.getters.tasklists;
                },
                set(newTasklists) {
                    store.commit('updateTasklists', newTasklists);
                },
                progressBarWidth() {
                    return 50;
                }
            }
        },
        methods: {
            navigate: function(newPath) {
                this.$router.push(newPath);
            }
        }

    }
</script>
