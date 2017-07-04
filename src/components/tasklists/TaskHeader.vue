<style lang="scss">
    .task-header {
        display: inline-flex; 
        align-items: center;
        justify-content: center;
        position: relative;
        right: 0%; 
        transition: right 0.2s ease-in-out;


        &.sortable-chosen:not(.sortable-ghost) {
            background: whitesmoke !important;
            .trashcan {
                display: none !important;
            }
        }

        .details-handle,
        .sort-handle {
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
            background: transparent;
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
                background: transparent;
                transition: background 0.2s ease;
                outline: none;
                border: 0;
                margin: 0;
                padding: 0;
                width: 120%;
                height: 100%;
                text-align: center;
                font-size: 1em;

            }
        }
        .trashcan {
            color: whitesmoke;
            background: salmon;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            .delete-task-icon,
            .delete-task-icon-confirmed {
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
            width: 115%;
            .task-title-container {
                width: 80%;
            }
            .sort-handle, 
            .details-handle,
            .task-nav-back-icon,
            .trashcan {
                width: 15%;
            }
            &.trashcan-visible {
                right: 15%;
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
            height: 25%;
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
                v-on:click="triggerFocusAndSelect($event.target)"
                v-on:blur="editingText = false"
                v-on:keydown.enter="triggerBlur($event.target)"
                v-on:change="updateTaskText"
                :v-model="text"
                :value="text" 
                :disabled="!editingText"
                class="task-title-input"> 
            </input>
        </v-touch>
        <button class="details-handle"> 
            <i v-on:click="navigate" class="fa fa-pencil details-handle-icon"></i>
        </button>
        <div 
            class="trashcan">
            <i 
                v-show="deleteMode && !deleteConfirmed" 
                v-on:click="deleteConfirmed = true"
                class="fa fa-trash delete-task-icon"></i>
            <i 
                v-show="deleteMode && deleteConfirmed" 
                v-on:click="deleteTask" 
                class="fa fa-times delete-task-icon-confirmed"></i>
        </div>        

    </div>
</template>

<script>
    import Vue from 'vue';
    import vueTouch from 'vue-touch';
    import store from '../../store';

    export default {
        name: 'task-header',
        props: ['text', 'listId', 'taskId'],
        data: function() {
            return {
                deleteMode: false,
                deleteConfirmed: false,
                trashcanVisible: false,
                editingTitle: false,
                editingText: false,
            };
        },
        components: {
            vueTouch
        },
        created() {
        },
        methods: {
            triggerFocusAndSelect(element) {
                console.log(element);
                element.focus();
                element.setSelectionRange(0,9999);
            },
            triggerBlur(element) {
                element.blur();
            },
            updateTaskText(e) {
                const payload = {
                    listId: this.listId,
                    taskId: this.taskId,
                    text: e.target.value 
                };
                store.commit('updateTaskText', payload); 
            },
            enableInput(e) {
                this.editingText = true;
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
                this.deleteMode = true;
                this.deleteConfirmed = false;
                this.trashcanVisible = true;
            },
            swipeRight() {
                this.deleteMode = false;
                this.deleteConfirmed = false;
                this.trashcanVisible = false;
            }

        }
   };
</script>
