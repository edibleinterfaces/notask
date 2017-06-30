<style lang="scss">
    .task-header {
        background: whitesmoke;
        width: 120%;
        display: inline-flex; 
        position: relative;
        right: 0%; 
        transition: right 0.2s ease-in-out;

        &.trashcan-visible {
            right: 20%;
        }
        .task-sort-handle {
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

            &:hover {
                background: aquamarine;
                .task-sort-handle-icon {
                    color: whitesmoke;
                }
            }
        }
        .task-title-container {
            padding-right: 10%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .trashcan {
            width: 20%;
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
                padding-right: 10%;
                width: 80%;
            }
            .task-sort-handle,
            .task-nav-back-icon
            {
                width: 20%;
            }
        }

    }
    @media (min-width: 750px) {
        .task-header {
            .task-title-container {
                width: 90%;
            }
            .task-sort-handle 
            .task-nav-back-icon
            {
                width: 10%;
            }
        }
    }
    @media (max-height: 400px) {
        .task-header {
            height:50%; 
            .task-sort-handle {
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
            class="task-sort-handle">
            <i  v-on:click="$router.go(-1)"
                class="fa fa-arrow-left task-sort-handle-icon"></i>
        </button>
        <button v-else> 
            <i v-on:click="router.go(-1)"
                class="fa fa-hand-paper-o task-sort-handle-icon"></i>
        </button>
        <v-touch 
            v-on:tap="navigate"
            v-on:swiperight="swipeRight"
            v-on:swipeleft="swipeLeft"
            class="task-title-container">
            {{ text }}
        </v-touch>
        <div 
            v-on:click="deleteTask()" 
            class="trashcan">
            <i class="fa fa-trash delete-task-icon"></i>
        </div>        

    </div>
</template>

<script>
    import vueTouch from 'vue-touch';
    import store from '../../store';

    export default {
        name: 'task-header',
        props: ['text', 'listId', 'taskId'],
        data: function() {
            return {
                trashcanVisible: false
            };
        },
        components: {
            vueTouch
        },
        created() {
        },
        methods: {
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
