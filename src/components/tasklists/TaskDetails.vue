<style lang="scss">
    .task-details-container {
        button.reminder-set-unset {
            width: 100px;
        }
        .task-details-container {
            width: 100%;
            height: 90%;
            overflow-x: hidden;
            .task-details {
                height: 80%;
                padding: 5%;
                .task-details-description-container {
                    padding-bottom: 20px;
                }
            }
        }
        .task-details {
            .task-details-input {
                height: 200px !important;
                width: 100%;
                margin: 0;
            }
        }
    }
</style>
<template>
    <div class="task-details-container">
        <task-header :text="task.text"></task-header>
        <div class="task-details">
            <h2>
                <i class="fa fa-pencil task-details-edit-icon"></i>
                Task Description
            </h2>
            <div class="task-details-description-container">
                <textarea class="task-details-input">{{ task.text }}

{{ task.details }}
                </textarea>
            </div>
            <h2>
                <i class="fa fa-clock-o task-details-reminder-icon"></i>
                Schedule a Reminder
            </h2>
            <div class="task-details-reminder-container">
                <h3>Remind me in: </h3>
                <input class="reminder-quantity"></input>
                <select>
                    <option class="reminder-unit">minutes</option>
                    <option class="reminder-unit">hours</option>
                    <option class="reminder-unit">days</option>
                </select>
                <button class="reminder-set-unset" v-on:click="toggleReminder">{{reminderActive ? 'disable' : 'set'}}</button>
                <button>x</button>
            </div>
        </div>
    </div>
</template>

<script>
    import store from '../../store';
    import TaskHeader from './TaskHeader';

    export default {
        name: 'task-details',
        props: ['listId','taskId'],
        components: {
            TaskHeader
        },
        data: function() {
            return {
                reminderActive: false
            };
        },
        methods: {
            toggleReminder() {
                this.reminderActive = !this.reminderActive;
            } 
        },
        computed: {
            task() {
                //return store.state.tasklists[ this.listId ].tasks[ this.taskId ];
                return store.getters.task({ listId: this.listId, taskId: this.taskId});

            } 
        },
    };
</script>
