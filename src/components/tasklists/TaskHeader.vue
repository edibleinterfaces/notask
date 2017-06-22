<style lang="scss">
    .task-header {
        width: 100%;
        display: inline-flex; 

        .edit-task-container {
            border: none;
            cursor: pointer;
            background: white;
            transition: background 0.2s ease-in-out;
            display: flex;
            align-items: center;
            justify-content: center;

            &:hover {
                background: aquamarine;
                .edit-task-icon {
                    color: whitesmoke
                }
            }

            .edit-task-icon {
                color: lightgray;
                font-size: 5vh;
            }
        }
        .task-title-container {
            padding-right: 10%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    
    @media (max-width: 750px) {
        .task-header {
            .task-title-container {
                width: 80%;
            }
            .edit-task-container {
                width: 20%;
            }
        }

    }
    @media (min-width: 750px) {
        .task-header {
            .task-title-container {
                width: 90%;
            }
            .edit-task-container {
                width: 10%;
            }
        }
    }
    @media (max-height: 400px) {
        .task-header {
            height:50%; 
            .edit-task-container {
                .edit-task-icon {
                    font-size: 15vh;
                }
            }
        } 
    }
    @media (min-height: 400px) {
        .task-header {
            height: calc(80%/5);
        }
    }
</style>
<template>
    <div 
        class="task-header">
        <button 
            v-on:click="navigate"
            class="edit-task-container">
            <i class="fa fa-ellipsis-v edit-task-icon"></i>
        </button>
        <div class="task-title-container">
            {{ text }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'task-header',
        props: ['text', 'listId', 'taskId'],
        methods: {
            navigate: function() {
                this.$emit('navigate', `/tasklist/${ this.listId }/task/${ this.taskId }/details`);
            }
        }
    };
</script>
