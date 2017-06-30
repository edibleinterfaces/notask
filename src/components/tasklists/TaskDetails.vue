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
            .reminder-unit,
            .reminder-set-unset, 
            .reminder-date {
                display: inline-block;
            }
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
                <textarea class="task-details-input">{{ task.details }}</textarea>
            </div>
            <h2>
                <i class="fa fa-clock-o task-details-reminder-icon"></i>
                Schedule a Reminder
            </h2>
            <div class="task-details-reminder-container">
                <datepicker 
                    v-model="reminderDateString" 
                    :inline="true">
                </datepicker>
                <h3>Remind me on </h3>
                {{ reminderHours }}:{{reminderMinutes}}, {{ reminderDate }}
            </div>
        </div>
    </div>
</template>

<script>
    import store from '../../store';
    import TaskHeader from './TaskHeader';
    import Datepicker from 'vuejs-datepicker';
    import dateFns from 'date-fns';

    export default {
        name: 'task-details',
        props: ['listId','taskId'],
        components: {
            TaskHeader,
            Datepicker
        },
        data: function() {
            return {
                reminderActive: false,
                reminderDateString: new Date(),
                reminderMinutesString: 0,
                reminderHoursString: 0
            };
        },
        methods: {
            toggleReminder() {
                this.reminderActive = !this.reminderActive;
            } 
        },
        computed: {

            reminderDate() {
                return dateFns.format(this.reminderDateString, 'MMMM Do, YYYY');
            },
            reminderHours() {
                return dateFns.format(this.reminderHoursString, 'HH A');
            },
            reminderMinutes() {
                return dateFns.format(this.reminderMinutesString, 'mm');
            },
            task() {
                //return store.state.tasklists[ this.listId ].tasks[ this.taskId ];
                return store.getters.task({ listId: this.listId, taskId: this.taskId});

            } 
        },
    };
</script>
