<style lang="scss">

    ::selection{
        background: salmon;
    }
    .edit-mode {
        background: whitesmoke;
    }

    .tasklist-header {

        right: 0%;
        -webkit-transition: right 0.2s ease, background 0.2s ease;
        position: relative;
        display: flex;
        font-size: 0;

        &.sortable-chosen > .sort-handle {
            > .fa-hand-paper-o {
            }
        }

        .nav-handle {
            text-decoration: none;
        }

        button.sort-handle {
            background-color: transparent;
            .handle-icon {
                color: aquamarine;
            }
        }

        .nav-handle,
        .sort-handle,
        .title-container {
            cursor: pointer;
            height: 100%;
        }
        .title-container {
            position: relative;
        }
        .swipe-handle {
            display: flex;
            align-items: center;
            justify-content: center;
            .swipe-icon {
                color: #efbbbb;
                font-size: 4vh;
                    
            }
        }

        .nav-handle,
        .sort-handle {
            transition: background 0.2s ease-in-out;
            display: flex;
            align-items: center;
            justify-content: center;
            color: aquamarine;
            height: 100%;

            .handle-icon {
                font-size: 5vh;
                width: 100%;
                text-align: center;
            }
        }


        .title-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            font-size: initial;
            text-align: center;

            .tasklist-title-input {
                background: transparent;
                width: 100%;
                height: 100%;
                margin:0;
                padding:0;
                flex: 1;
                text-align: center;
                font-size: 5vh;
                border: none;
                outline: none;
            }

            .tasklist-title-input[disabled] {
                user-select: none;
            }

        }

        .trashcan {
            cursor: pointer;
            background: salmon;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            font-size: initial;

            .delete-tasklist-icon {
                font-size: 5vh;
                color: whitesmoke;
            }
        }
    }


    @media(max-height: 400px) {
        .tasklist-header {
            height: 50%;
            .sort-handle,
            .nav-handle {
                .handle-icon {
                    font-size: 15vh;
                }
            }
        }
    }

    @media (min-height: 400px) {
        .tasklist-header {
            height: 20%;
        }
    }

    @media(max-width: 750px) {
        .tasklist-header {
            width: 120%;
        }
        .title-container {
            width: 60%;
        }
        .sort-handle,
        .nav-handle,
        .swipe-handle,
        .trashcan {
            width: 20%;
        }
        .tasklist-header.delete-mode {
            right: 20%;
        }
    }
    @media(min-width: 750px) {
        .tasklist-header {
            width: 110%;
        }
        .title-container {
            width: 80%;
        }
        .sort-handle,
        .swipe-handle,
        .nav-handle,
        .trashcan {
            width: 10%;
        }
        .tasklist-header.delete-mode {
            right: 10%;
        }
    }

</style>

<template>

    <div
        v-bind:class="{
            'delete-mode': deleteMode,
            'edit-mode': editingTitle
       }"
        v-on:click="delegatedClick"
        class="tasklist-header">
        <div 
            v-on:tap="navigate" 
            v-if="Number.isInteger(listId)" 
            class="sort-handle">
            <i class="fa fa-hand-paper-o handle-icon"></i>
        </div>
        <router-link 
            v-else
            to="/tasklists"
            class="nav-handle">
            <i class="fa fa-arrow-left handle-icon"></i>
        </router-link>
        <v-touch 
            v-on:swipeleft="enableDeleteMode"
            v-on:swiperight="disableDeleteMode"
            class="title-container">
            <input 
                :value="listTitle" 
                :disabled="this.$route.name === 'ListsView'"
                v-on:click="navigateOrEdit"
                v-on:focus="selectText($event.target)"
                v-on:blur="disableDeleteMode"
                v-on:keydown.enter="triggerBlur($event.target)"
                v-on:change="updateTasklistTitle"
                class="tasklist-title-input"> 
            </input>
        </v-touch>
        <div 
            v-on:click="toggleDeleteMode" 
            class="swipe-handle">
            <i class="fa fa-ellipsis-v swipe-icon"></i>
        </div>
        <div 
            v-on:click="deleteTasklist(listId)" 
            class="trashcan"> 
            <i 
                v-if="deleteMode && deleteConfirmed" 
                class="fa fa-trash delete-tasklist-icon"></i>
            <i v-else class="fa fa-trash delete-tasklist-icon"></i>
        </div>
    </div>

</template>

<script>

    import Vue from 'vue';
    import VueTouch from 'vue-touch';
    import store from '../../store';
    import { selectText } from '../../utils';

    Vue.use(VueTouch);
    VueTouch.config.swipe = { 
        direction: 'horizontal', // fixed scroll bug
        velocity: 0.1,
        threshold: 0
    }; 

    export default {
        name: 'tasklist-header',
        props: ['listId'],
        data: function() {
            return {
                trashcanVisible: false,
                editingTitle: false,
                deleteMode: false,
                deleteConfirmed: false
            };
        },
        computed: {
            tasklists: function() {
                return store.getters.tasklists;
            },
            listTitle: function() {
                return store.getters.tasklists[ this.listId ].title;
            }

        },
        mounted() {
        },
        methods: {
            selectText,
            navigateOrEdit() {
                if (this.$route.name === 'ListsView')
                    this.delegatedClick(e);
                else 
                    this.editingTitle = true;
            },
            triggerBlur(element) {
                element.blur();
            },
            updateTasklistTitle(e) {
                const payload = {
                    listId: this.listId,
                    title: e.target.value, 
                };
                store.commit('updateTasklistTitle', payload);
                console.log(store);
            },
            delegatedClick(e) {
                const allowed = [
                    'sort-handle',
                    'handle-icon',
                    'title-container',
                    'tasklist-title-input'
                ];
                const catchTheClick = allowed.some(c => e.target.classList.contains(c));

                if (catchTheClick) {
                    this.navigate();
                }
            },
            navigate() {
                this.$emit('navigate', `/tasklist/${ this.listId }`);
            },
            toggleDeleteMode() {
                this.deleteMode = !this.deleteMode;
            },
            enableDeleteMode() {
                this.deleteMode = true;
                console.log(this.deleteMode);
            },
            disableDeleteMode() {
                this.deleteMode = false;
                console.log(this.deleteMode);
            },
            deleteTasklist(listId) {

                const CSS_FADEOUT_INTERVAL = 200;

                this.deleteMode = false;

                setTimeout(function() {
                    store.commit('removeTasklist', listId);
                }, CSS_FADEOUT_INTERVAL);

            }
        }
    };

</script>
