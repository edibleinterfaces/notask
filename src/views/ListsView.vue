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
        <!-- Progress Bar: scroll distance from top of list -->
        <progress-bar 
            :progress-value="progress" 
            :progress-bg-color="progressBgColor" 
            :progress-color="progressBarColor" /> 

        <!-- Draggable Wrapper around Tasklist Header -->
        <!-- using 'event.native' on draggable component lets you access native event. standard vuejs feature. --> 
        <draggable 
            class="lists-view" 
            @scroll.native="scrollHandler" 
            :options="draggableOptions" 
            v-model="tasklists">

            <!-- Tasklist Header -->
            <tasklist-header 
                v-on:navigate="navigate"
                v-for="(tasklist, listId) in tasklists" 
                :key="listId"
                :list-id="listId"
                :title="tasklist.title">
            </tasklist-header>
        </draggable>

        <!-- Dashboard -->
        <app-dashboard 
            v-on:list-top="scrollToTop('top')" 
            v-on:list-bottom="scrollToBottom('bottom')" />
    </div>
</template>

<script>

    import Vue from 'vue';
    import draggable from 'vuedraggable';
    import store from '../store';

    import TasklistHeader from '../components/tasklists/TasklistHeader';
    import AppDashboard from '../components/Dashboard';
    import ProgressBar from 'Common/components/ProgressBar';

    import styles from '../../style/themes.scss';

    export default {
        name: 'list-view',
        components: { TasklistHeader, AppDashboard, draggable, ProgressBar },
        props: ['listId', 'taskId'],
        data: function() {
            return {
                listsViewEl: null,
                progress: 0,
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
            },
            scrollProgress() {
                return this.progress;
            },
            progressBarColor() {
                const stylesKey = `${store.getters.theme}-progressColor`;
                return styles[stylesKey];
            },
            progressBgColor() {
                const stylesKey = `${store.getters.theme}-progressBgColor`;
                return styles[stylesKey];
            }
        },
        methods: {
            scrollToTop() {

                let fnHandle;
                const el = this.listsViewEl;

                const scrollInterval = 2;
                const scrollDelta = 30;

                function scrollFn() {
                    if (el.scrollTop <= 0) {
                        clearInterval(fnHandle);
                    }
                    el.scrollTo(0, el.scrollTop - scrollDelta);
                };

                fnHandle = setInterval(scrollFn, scrollInterval); 


            },
            scrollToBottom() {

                let fnHandle;
                const el = this.listsViewEl;
                const scrollInterval = 2;
                const scrollDelta = 30;

                function scrollFn() {
                    if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
                        clearInterval(fnHandle);
                    }
                    el.scrollTo(0, el.scrollTop + scrollDelta);
                };

                fnHandle = setInterval(scrollFn, scrollInterval); 

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
