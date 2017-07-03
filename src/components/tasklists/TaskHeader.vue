<style lang="scss">
    .task-header {
        background: whitesmoke;
        display: inline-flex; 
        align-items: center;
        justify-content: center;
        position: relative;
        right: 0%; 
        transition: right 0.2s ease-in-out;

        .details-handle,
        .sort-handle {
            background: whitesmoke;
            outline: none;
            border: none;
            padding: 0;
            cursor: pointer;
            transition: background 0.2s ease-in-out;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            text-align: center !important;

        }
        .details-handle {
            .details-handle-icon {
                text-align: center;
                color: lightgray;
                font-size: 5vh;
                width: 100%;
            }
        }
        .sort-handle {
            .task-sort-handle-icon,
            .task-nav-back-icon {
                width: 100%;
                text-align: center;
                color: lightgray;
                font-size: 5vh;
            }

            .task-sort-handle-icon:hover {
                color: aquamarine;
            }
        }
        .task-title-container {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            .task-title-input {
                transition: background 0.2s ease;
                background: whitesmoke;
                outline: none;
                border: 0;
                margin: 0;
                padding: 0;
                width: 120%;
                height: 100%;
                text-align: center;
                font-size: 1em;

                &:focus {
                    background: bisque;
                }
                &[disabled] {
                    user-select: none;
                    color: black;
                }
            }
        }
        .trashcan {
            color: whitesmoke;
            background: salmon;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            .delete-task-icon {
                width: 100%;
                font-size: 5vh;
                text-align: center;
            }
        }

    }
    
    @media (max-width: 750px) {
        .task-header {
            width: 120%;
            .task-title-container {
                width: 60%;
            }
            .sort-handle,
            .details-handle,
            .task-nav-back-icon,
            .trashcan {
                width: 20%;
            }
            &.trashcan-visible {
                right: 20%;
            }
        }

    }
    @media (min-width: 750px) {
        .task-header {
            width: 110%;
            .task-title-container {
                width: 80%;
            }
            .sort-handle, 
            .details-handle,
            .task-nav-back-icon,
            .trashcan {
                width: 10%;
            }
            &.trashcan-visible {
                right: 10%;
            }
        }
    }
    @media (max-height: 400px) {
        .task-header {
            height: 50%; 
            .sort-handle {
                .task-sort-handle-icon {
                    font-size: 15vh;
                }
            }
        } 
    }
    @media (min-height: 400px) {
        .task-header {
            height: 20%;
        }
    }
</style>
<template>
    <div 
        v-bind:class="{'trashcan-visible': trashcanVisible}"
        class="task-header">
        <button 
            v-if="$route.name === 'TaskDetailsView'"
            class="sort-handle">
            <i  v-on:click="$router.go(-1)"
                class="fa fa-arrow-left task-sort-handle-icon"></i>
        </button>
        <button v-else class="sort-handle"> 
            <i v-on:click="$router.go(-1)"
                class="fa fa-hand-paper-o task-sort-handle-icon"></i>
        </button>
        <v-touch 
            v-on:tap="enableInput"
            v-on:swiperight="swipeRight"
            v-on:swipeleft="swipeLeft"
            class="task-title-container">
            <input 
                v-on:focus="selectText($event.target)"
                v-on:blur="editingTitle = false"
                v-on:keydown.enter="triggerBlur($event.target)"
                v-on:change="updateTask"
                :v-model="text"
                :value="text" 
                :disabled="!editingTitle"
                class="task-title-input"> 
            </input>
        </v-touch>
        <button class="details-handle"> 
            <i v-on:click="navigate" class="fa fa-pencil details-handle-icon"></i>
        </button>
        <div 
            v-on:click="deleteTask()" 
            class="trashcan">
            <i class="fa fa-trash delete-task-icon"></i>
        </div>        

    </div>
</template>

<script>
    import Vue from 'vue';
    import vueTouch from 'vue-touch';
    import store from '../../store';
    import { selectText } from '../../utils';

    export default {
        name: 'task-header',
        props: ['text', 'listId', 'taskId'],
        data: function() {
            return {
                trashcanVisible: false,
                editingTitle: false
            };
        },
        components: {
            vueTouch
        },
        created() {
        },
        methods: {
            triggerBlur(element) {
                element.blur();
            },
            selectText,
            updateTask(e) {
                const payload = {
                    listId: this.listId,
                    taskId: this.taskId,
                    text: e.target.value 
                };
                store.commit('updateTaskText', payload); 
            },
            enableInput(e) {
                this.editingTitle = true;
                Vue.nextTick(function() {
                    e.target.focus()
                });
            },
            deleteTask() {
                this.trashcanVisible = false;
                const payload = {
                    listId: this.listId,
                    taskId: this.taskId
                };

                setTimeout(function() {
                    store.commit('removeTask', payload);
                }, 300);
            },
            navigate() {
                this.$emit('navigate', `/tasklist/${ this.listId }/task/${ this.taskId }/details`);
            },
            swipeLeft() {
                this.trashcanVisible = true;
            },
            swipeRight() {
                this.trashcanVisible = false;
            }

        }
   };
</script>
