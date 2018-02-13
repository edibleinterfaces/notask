<style lang="scss">
    .task-details-container {

        position: relative;

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
                        background: aquamarine;
                }
                height: 200px !important;
                width: 100%;
                margin: 0;
                padding: 2%;
            }
        }
        .datepicker-container {
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
        <modal :active="modalActive" @modalclose="modalActive = false">
            <vue-timepicker></vue-timepicker>
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
            <h2>
                <i class="fa fa-clock-o task-details-reminder-icon"></i>
                Schedule a Reminder
            </h2>
            <div class="task-details-reminder-container">
                <datepicker 
                    wrapper-class="datepicker-container"
                    v-on:selected="openModal"
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
    import modal from '../../components/modals/Modal';
    import Vue from 'vue';
    import VueTimepicker from 'vue2-timepicker';

    Vue.use(VueTimepicker);
    export default {
        name: 'task-details',
        props: ['listId','taskId'],
        components: {
            TaskHeader,
            Datepicker,
            modal,
            VueTimepicker,
        },
        data: function() {
            return {
                modalActive: false,
                reminderActive: false,
                reminderDateString: new Date(),
                reminderMinutesString: 0,
                reminderHoursString: 0
            };
        },
        methods: {
            openModal() {
                this.modalActive = true;
            },
            closeModal() {
                console.log('ya');
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
            } 
        },
    };
</script>
