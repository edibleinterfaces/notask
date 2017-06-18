<style lang="scss">

    .lists-view-container {
        height: 100%;
        width: 100%;

        ::-webkit-scrollbar {
            display: none;
        }

        > .lists-view { 
            width: 100%;
            overflow-y: scroll;
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
         :options="{ handle: '.sort-handle' }"
            v-model="tasklists" 
            class="lists-view">
            <tasklist-header 
                v-for="(tasklist, listId) in tasklists" 
                v-on:navigate="navigateTo"
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

    export default {
        name: 'listview',
        components: {
            TasklistHeader,
            Dashboard,
            draggable
        },
        data: function() {
            return {
                tasklists: this.$store.state.tasklists
            };
        },
        methods: {
            // events on components are handled internally by component.
            // component then emits event to parent, where parent can react.
            navigateTo: function(newPath) {
                this.$router.push(newPath);
            }
        }

    }
</script>
