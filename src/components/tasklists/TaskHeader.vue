<style lang="scss">
    .task-header {
        background: whitesmoke;
        width: 125%;
        display: inline-flex; 
        position: relative;
        right: 0%; 
        transition: right 0.2s ease-in-out;

        &.trashcan-visible {
            right: 25%;
        }
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

            .task-sort-handle-icon,
            .task-nav-back-icon {
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
            .task-title-input {
                transition: background 0.2s ease;
                background: whitesmoke;
                outline: none;
                border: 0;
                margin: 0;
                padding: 0;
                width: 100%;
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
            width: 25%;
            color: whitesmoke;
            .delete-task-icon {
                display: flex;
                align-items: center;
                justify-content: center;
                background: salmon;
                width: 100%;
                height: 100%;
                font-size: 5vh;
            }
        }

    }
    
    @media (max-width: 750px) {
        .task-header {
            .task-title-container {
                width: 50%;
            }
            button.sort-handle,
            .task-nav-back-icon
            {
                width: 25%;
            }
        }

    }
    @media (min-width: 750px) {
        .task-header {
            .task-title-container {
                width: 90%;
            }
            .sort-handle 
            .task-nav-back-icon
            {
                width: 10%;
            }
        }
    }
    @media (max-height: 400px) {
        .task-header {
            height:50%; 
            .sort-handle {
                .task-sort-handle-icon {
                    font-size: 15vh;
                }
            }
        } 
    }
    @media (min-height: 400px) {
        .task-header {
            height: calc(100%/5);
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
                v-on:blur="editingTitle = false"
                :v-model="text"
                :value="editingTitle" 
                :disabled="!editingTitle"
                class="task-title-input"> 
            </input>
        </v-touch>
        <button class="sort-handle"> 
            <i v-on:click="navigate" class="fa fa-pencil task-sort-handle-icon"></i>
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
            enableInput(e) {
                this.editingTitle = true;
                Vue.nextTick(function() {
                    e.target.focus()
                });
            },
            disableInput() {
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
