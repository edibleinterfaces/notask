<style lang="scss">
    .lists-view-container {
        height: 100%;
        width: 100%;

        ::-webkit-scrollbar {
            display: none;
        }

        .lists-view { 
            height: 90%;
            width: 100%;
            overflow-y: scroll;
            -webkit-overflow-scrolling: touch;
        }

    }
</style>
<template>
    <div class="lists-view-container">
        <div class="lists-view">
            <tasklist-header 
                v-for="(tasklist, listId) in tasklists" 
                v-on:navigate="navigateTo"
                :list-id="listId"
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
