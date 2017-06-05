<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>

import TaskModel from './models/TaskModel';
import TasklistModel from './models/TasklistModel';

import LandingPage from './components/LandingPage';
import Tasklist from './components/tasklists/Tasklist';
import ListManager from './components/tasklists/ListManager';
import Task from './components/tasklists/Task';

const tasklists = [
    new TasklistModel({ tasks: [ new TaskModel() ] }),
    new TasklistModel({ tasks: [ new TaskModel() ] }),
    new TasklistModel({ tasks: [ new TaskModel() ] }),
];

export default {
    name: 'app',
    components: {
        LandingPage,
        Tasklist,
        Task,
    },
    data: function () {
        return {
        };
    }
}

</script>
