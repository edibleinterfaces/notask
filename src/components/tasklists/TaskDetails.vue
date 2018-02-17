<style lang="scss">

    @import "../../../style/themes.scss";
    @import "../../../../../common/style/themify.scss";

    .task-details-container {

        button.add-reminder {
            width: 40%;
            height: 60px;
            max-width: 200px;
        }
        .reminder-modal > .current-time {
            text-align: center;
        }
        .reminder-modal > h3.time-label {
            display: inline-block;
            margin-right: 2%;
        }
        .reminder-modal > .time-picker,
        .reminder-modal > .date-picker {
            margin-top: 2%;
            margin-bottom: 2%;
        }

        button.reminder-set-unset {
            width: 100px;
        }
        .task-details-container {
            width: 100%;
            height: 90%;
            overflow-x: hidden;
            .task-details {
                overflow-y: scroll;
                height: 80%;
                padding: 5%;
                .task-details-description-container {
                    padding-bottom: 20px;
                }
            }
        }
        .datepicker {
            width: 100%;
        }
        .task-details {
            .reminder-unit,
            .reminder-set-unset, 
            .reminder-date {
                display: inline-block;
            }
            .task-details-input {
                &:focus {
                    outline: none;
                    @include themify($themes) {
                        background: themed('task-details-focus-bg') !important;
                    }
                }
                height: 200px !important;
                width: 100%;
                margin: 0;
                padding: 2%;
            }
        }
        .datepicker-container {
            .cell.selected {
                @include themify($themes) { 
                    background: themed('task-details-date-selected'); 
                }
            }
            > div:nth-child(2) { 
                padding: 4%;
                width: 100%;
                display: inline-block;
            }

        }
        @media(max-width:750px) {
            .task-details {
                h2 {
                    text-align: center;
                }
            }
        }
        @media(min-width:750px) {
            .task-details {
                h2 {
                    text-align: left;
                }
            }
        }

    }
</style>

<template>
    <div class="task-details-container">
        <modal 
            class="reminder-modal"
            :list-id="listId" 
            :task-id="taskId" 
            :active="modalActive" 
            @modalclose="modalActive = false">

            <h3 class="current-time">{{reminderTime.HH}}:{{reminderTime.mm}} {{reminderTime.A}} on {{reminderDate}}</h3>
            <h3 class="time-label">Time: </h3>
            <vue-timepicker 
                format="HH:mm A"
                class="time-picker" 
                :minuteInterval="5" 
                v-model="reminderTime">
            </vue-timepicker>
            <button v-on:click="updateReminders" class="add-reminder">Add Reminder</button>

            <h3 class="date-label">Date:</h3>
            <datepicker 
                class="date-picker"
                wrapper-class="datepicker-container"
                v-model="reminderDateString" 
                :inline="true">
            </datepicker>

        </modal>
        <task-header :text="task.text" :list-id="listId" :task-id="taskId" />
        <div class="task-details">
            <h2>
                <i class="fa fa-pencil task-details-edit-icon"></i>
                Task Details
            </h2>
            <div class="task-details-description-container">
                <textarea @blur="updateTaskDetails" class="task-details-input">{{ task.details }}</textarea>
            </div>
            <h2 v-on:click="openModal">
                <i class="fa fa-clock-o task-details-reminder-icon"></i>
                Schedule a Reminder
            </h2>
            <div v-if="reminders.length" class="reminder-list-container">
                <h3>Reminders</h3>
                <ul 
                    class="task-details-reminder-container"
                    v-for="(reminder, index) in reminders" 
                    :key="index">
                    <li>{{ reminderHours }}:{{reminderMinutes}}, {{ reminderDate }}
                        <i 
                            class="delete-reminder fa fa-close"
                            :index="index" 
                            v-on:click="deleteReminder(index)"></i>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

    import Vue from 'vue';
    import VueTimepicker from 'vue2-timepicker';
    import dateFns from 'date-fns';

    import store from '../../store';
    import TaskHeader from './TaskHeader';
    import Datepicker from 'vuejs-datepicker';
    import Modal from '../../../../../common/modal/Modal.vue';

    Vue.use(VueTimepicker);

    export default {
        name: 'task-details',
        props: ['listId','taskId'],
        components: { TaskHeader, Datepicker, Modal, VueTimepicker },
        data: function() {
            return {
                modalActive: false,
                reminderActive: false,
                reminderDateString: new Date(),
                reminderMinutesString: 0,
                reminderHoursString: 0,
                reminderTime: {
                    HH: "10",
                    mm: "05",
                    ss: "00",
                    A: ''
                } 
            };
        },
        methods: {
            openModal() {
                this.modalActive = true;
            },
            closeModal() {
                this.modalActive = false;
            },
            toggleReminder() {
                this.reminderActive = !this.reminderActive;
            }, 
            updateTaskDetails(event) {
                const payload = {
                    listId: this.listId,
                    taskId: this.taskId,
                    details: event.target.value
                };
                store.commit('updateTaskDetails', payload); 
            },
            updateReminders() {
                const payload = {
                    taskId: this.taskId,
                    listId: this.listId,
                    reminderData: {
                        date: this.reminderDate,  
                        hour: this.reminderTime.HH,
                        minute: this.reminderTime.mm,
                        am: this.reminderTime.A
                    }
                }; 
                store.commit('updateReminders', payload);
            },
            deleteReminder(reminderIndex) {
                const payload = {
                    reminderIndex,
                    listId: this.listId,
                    taskId: this.taskId
                };
                store.commit('deleteReminder', payload);
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
                return store.getters.task({ listId: this.listId, taskId: this.taskId });
            },
            reminders() {
                return store.getters.reminders({ listId: this.listId, taskId: this.taskId });
            }
        },
    };
</script>
