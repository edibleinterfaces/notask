<style lang="scss">

    @import '../../style/themes.scss';
    @import '../../../common/style/themify.scss';

    .task-details-container {
        -webkit-overflow-scrolling: touch;
        overflow-x: hidden;
        height: 100%;
        width: 100%;
        .task-details {
            height: 90%;
            width: 100%;
        }
        & > .task-header {
            @include themify($themes) {
                background: themed('task-header-bg');
            }
        }
    }
    .task-details {
        @include themify($themes) {
            background: theme('task-details-bg');
        }
    }

</style>
<template>

    <div class="task-details-container">
        <task-details :list-id="listId" :task-id="taskId" />
        <dashboard />
    </div>

</template>
<script>

    import TaskDetails from '../components/tasklists/TaskDetails';
    import Dashboard from '../components/Dashboard';

    export default {
        name: 'list-view',
        props: ['listId', 'taskId'],
        components: {
            TaskDetails,
            Dashboard
        }
    };

</script>
