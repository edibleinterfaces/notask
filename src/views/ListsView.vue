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
        <progress-bar :value="progressBarWidth"></progress-bar> 
        <draggable v-on:scroll.native="scrollHandler" class="lists-view" :options="draggableOptions" v-model="tasklists">
            <tasklist-header 
                v-for="(tasklist, listId) in tasklists" 
                v-on:navigate="navigate"
                :list-id="listId"
                :title="tasklist.title"
                :key="listId">
            </tasklist-header>
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
        data: function() {
            return {
                progressBarWidth: 50,
                draggableOptions: { handle: '.sort-handle', draggable: '.tasklist-header' },
            }
        },
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
                },
            }
        },
        created() {
            window.addEventListener('scroll', function(e) { console.log(e) });
        },
        destroyed() {
            window.removeEventListener('scroll', this.scrollHandler);
        },
        methods: {
            scrollHandler(event) {
                console.log(event);
            },
            navigate(newPath) {
                this.$router.push(newPath);
            }
        }

    }
</script>
