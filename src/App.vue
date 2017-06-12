<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>

import LandingPage from './components/LandingPage';
import Tasklist from './components/tasklists/Tasklist';
import TasklistHeader from './components/tasklists/TasklistHeader';
import TasklistBody from './components/tasklists/TasklistBody';
import ListManager from './components/tasklists/ListManager';
import Task from './components/tasklists/Task';

export default {
    name: 'app',
    components: {
        LandingPage,
        ListManager,
        Tasklist,
        TasklistHeader,
        TasklistBody,
        Task,
    },
    data: function () {
        return {};
    }
}

</script>
