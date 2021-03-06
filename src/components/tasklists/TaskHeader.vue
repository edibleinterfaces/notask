<style lang="scss">

    @import "~Common/style/themify.scss";
    @import "../../../style/themes.scss";

    .task-header {
        &.task-complete {
            background: whitesmoke;
        }
        display: inline-flex; 
        align-items: center;
        justify-content: center;
        position: relative;
        right: 0%; 
        transition: right 0.2s ease-in-out;
        &.sortable-chosen:not(.sortable-ghost) {
            @include themify($themes) {
                background: themed('task-header-bg') !important;
            }
            div.slideout-controls {
                background: transparent !important;
                visibility: hidden !important;
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
            @include themify($themes) {
                .details-handle-icon {
                    text-align: center;
                    color: themed('task-details-handle');
                    font-size: 5vh;
                    width: 100%;
                }
                .swipe-icon {
                    color: themed('task-details-handle');
                }

            }
        }
        .sort-handle {
            @include themify($themes) {
                .task-sort-handle-icon {
                    color: themed('task-sort-handle');
                }
                .task-nav-back-icon {
                    color: themed('task-nav-back');
                }
            }
            .task-sort-handle-icon,
            .task-nav-back-icon {
                width: 100%;
                text-align: center;
                font-size: 5vh;
            }
            @include themify($themes) {
                .task-sort-handle-icon:hover {
                    color: themed('task-sort-handle');
                }
            }
        }
        .task-title-container {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            @include themify($themes) {
                ::selection {
                    background: themed('task-header-text-selected'); 
                }
                .task-title-input {
                    background: transparent;
                    color: themed('tasklist-header-font'); 
                    transition: background 0.2s ease;
                    outline: none;
                    border: 0;
                    margin: 0;
                    padding: 0;
                    width: 120%;
                    height: 100%;
                    text-align: center;
                    font-size: 2em;
                }
            }
        }
        .slideout-controls {
            @include themify($themes) {
                background: themed('slideout-controls-bg');
                background: themed('task-icon');
                color: themed('task-icon');
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                    
                .details-handle-icon,
                .task-complete,
                .delete-task-icon,
                .delete-task-icon-confirmed {
                    font-size: 5vh;
                    width: 100%;
                    text-align: center;
                    color: themed('slideout-controls-icons');
                    &:hover {
                        color: whitesmoke;
                    }
                }
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
            .slideout-controls {
                width: 20%;
            }
            .task-complete,
            .delete-task-icon {
                font-size: 7vw;
            }
            &.trashcan-visible {
                right: 20%;
            }
        }

    }
    @media (min-width: 751px) {
        .task-header {
            width: 115%;
            .task-title-container {
                width: 80%;
            }
            .sort-handle, 
            .details-handle,
            .task-nav-back-icon,
            .slideout-controls {
                width: 15%;
            }
            .task-complete,
            .delete-task-icon {
                font-size: 3vw;
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
            height: 20%;
        }
    }
</style>
<template>
    <div 
        v-bind:class="{'trashcan-visible': trashcanVisible, 'task-complete': complete}"
        class="task-header">
        <button v-if="$route.name === 'TaskDetailsView'" class="sort-handle">
            <i  v-on:click="$router.go(-1)" class="fas fa-arrow-left task-sort-handle-icon"></i>
        </button>
        <button v-else class="sort-handle"> 
            <i class="fas fa-hand-paper task-sort-handle-icon"></i>
        </button>
        <v-touch 
            v-on:tap="enableInput"
            v-on:swiperight="swipeRight"
            v-on:swipeleft="swipeLeft"
            class="task-title-container">
            <input 
                v-on:click="triggerFocusAndSelect($event.target)"
                v-on:focus="onFocus"
                v-on:blur="editingText = false"
                v-on:keydown.enter="triggerBlur($event.target)"
                v-on:change="updateTaskText"
                :v-model="text"
                :value="text" 
                :readonly="!editingText"
                class="task-title-input">
            </input>
        </v-touch>
        <button v-on:click="deleteMode ? disableDeleteMode() : enableDeleteMode()" class="details-handle"> 
            <i  
                class="fas fa-ellipsis-v swipe-icon"></i>
        </button>
        <div class="slideout-controls">
            <!--<i v-on:click="navigate" class="fas fa-pencil-alt details-handle-icon"></i>-->
            <i 
                class="task-complete" 
                :class="{'fas fa-check-square': complete, 'far fa-check-square': !complete}" 
                v-on:click="toggleComplete"></i>
            <i 
                v-show="deleteMode && !deleteConfirmed" 
                v-on:click="deleteConfirmed = true"
                class="fas fa-trash delete-task-icon"></i>
            <i 
                v-show="deleteMode && deleteConfirmed" 
                v-on:click="deleteTask" 
                class="fas fa-times-circle delete-task-icon-confirmed"></i>
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
        components: { vueTouch },
        computed: {
            complete() {
                return store.getters.tasklists[this.listId].tasks[this.taskId].complete;
            }
        },
        methods: {
            onFocus(element) {
                this.enableInput(element);
            },
			enableDeleteMode() {
                this.swipeLeft();
                this.deleteMode = true;
                this.deleteConfirmed = false;
            },
            disableDeleteMode() {
                this.swipeRight();
                this.deleteMode = false;
                this.deleteConfirmed = false;
            },
            toggleComplete() {
                store.commit('toggleTaskComplete', { 
                    listId: this.listId,
                    taskId: this.taskId,
                    complete: !this.complete
                }); 
            },
            triggerFocusAndSelect(element) {
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

                setTimeout(() => {
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

                // make these actions?
                setTimeout(() => {
                    store.commit('sortTasklist', this.listId);
                }, 300);
            }

        }
   };
</script>
