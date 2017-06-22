<style lang="scss">

    .tasklist-header {

        right: 0%;
        transition: right 0.2s ease;
        -webkit-transition: right 0.2s ease;
        position: relative;
        display: flex;
        font-size: 0;
        background: whitesmoke;


        &.sortable-chosen > .sort-handle {
            background: aquamarine;
            > .fa-hand-paper-o {
                color: white;
            }
        }

        .nav-handle {
            text-decoration: none;
        }
        .nav-handle,
        .sort-handle,
        .tasklist-title-container {
            height: 100%;
        }

        .nav-handle,
        .sort-handle {
            transition: background 0.2s ease-in-out;
            display: flex;
            align-items: center;
            justify-content: center;
            color: aquamarine;

            .handle-icon {
                font-size: 5vh;
            }
        }

        .tasklist-title-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            font-size: initial;
            text-align: center;
        }

        .trashcan {
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
        .sort-handle,
        .nav-handle {
            width: 20%;
        }
        .tasklist-title-container {
            padding-right: 10%;
            width: 80%;
        }
        .tasklist-title {
        }
        .trashcan {
            width: 20%;
        }
        &.trashcan-visible {
            right: 20%;
        }
    }
    @media(min-width: 750px) {
        .sort-handle,
        .nav-handle {
            width: 10%;
        }
        .tasklist-header {
            width: 110%;
        }
        .tasklist-title-container {
            width: 90%;
            padding-right: 10%;
        }
        .tasklist-title {
        }
        .trashcan {
            width: 10%;
        }
        &.trashcan-visible {
            right: 10%;
        }
    }

</style>

<template>

    <div
        v-bind:class="{
            'trashcan-visible': trashcanVisible, 
        }"
        class="tasklist-header">
        <div 
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
            v-on:tap="navigate" 
            v-on:swipeleft="showTrashcan"
            v-on:swiperight="hideTrashcan"
            class="tasklist-title-container">
            <h1 class="tasklist-title">{{ listTitle }}</h1>
        </v-touch>
        <div 
            v-on:click="deleteTasklist(listId)" 
            class="trashcan"> 
            <i class="fa fa-trash delete-tasklist-icon"></i>
        </div>
    </div>

</template>

<script>

    import Vue from 'vue';
    import VueTouch from 'vue-touch';
    import store from '../../store';

    Vue.use(VueTouch);
    VueTouch.config.swipe = { direction: 'horizontal' }; // fixes scroll bug

    export default {
        name: 'tasklist-header',
        props: ['title', 'listId'],
        data: function() {
            return {
                trashcanVisible: false
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
        methods: {
            navigate: function(index) {
                this.$emit('navigate', `/tasklist/${ this.listId }`);
            },
            showTrashcan: function(e) {
                this.trashcanVisible = true;
            },
            hideTrashcan: function(e) {
                this.trashcanVisible = false;
            },
            deleteTasklist(listId) {

                const CSS_FADEOUT_INTERVAL = 200;

                this.trashcanVisible = false;

                setTimeout(function() {
                    store.commit('removeTasklist', listId);
                }, CSS_FADEOUT_INTERVAL);

            }
        }
    };

</script>
