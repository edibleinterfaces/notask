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
        <progress-bar :value="progress"></progress-bar> 
        <!-- using 'event.native' on draggable component lets you access native event. standard vuejs feature. --> 
        <draggable 
            class="lists-view" 
            @scroll.native="scrollHandler" 
            :options="draggableOptions" 
            v-model="tasklists">
            <tasklist-header 
                v-for="(tasklist, listId) in tasklists" 
                v-on:navigate="navigate"
                :list-id="listId"
                :title="tasklist.title"
                :key="listId">
            </tasklist-header>
        </draggable>
        <dashboard v-on:list-top="scrollToListTop"></dashboard>
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
                progress: 0,
                listsViewEl: null,
                draggableOptions: { handle: '.sort-handle', draggable: '.tasklist-header' },
            }
        },
        mounted() {
            this.listsViewEl = this.$el.querySelector('.lists-view');
        },
        computed: {
            tasklists: {
                get() {
                    return store.getters.tasklists;
                },
                set(newTasklists) {
                    store.commit('updateTasklists', newTasklists);
                },
                progress() {
                    return this.progress;
                },
            }
        },
        methods: {
            scrollToListTop() {
                this.listsViewEl.scrollTo(0,0);
            },
            scrollHandler({ target }) {
                const possibleDistanceToMove = target.scrollHeight - target.clientHeight; 
                const distanceFromTop = target.scrollTop;
                this.progress = distanceFromTop / possibleDistanceToMove;
            },
            navigate(newPath) {
                this.$router.push(newPath);
            }
        }

    }
</script>
