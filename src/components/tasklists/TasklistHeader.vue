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

        .sort-handle,
        .tasklist-title-container {
            height: 100%;
        }

        .sort-handle {
            display: flex;
            align-items: center;
            justify-content: center;
            color: aquamarine;

            .sort-handle-icon {
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
        .sort-handle {
            width: 20%;
        }
        .tasklist-title-container {
            width: 80%;
        }
        .tasklist-title {
            padding-right: 10%;
        }
        .trashcan {
            width: 20%;
        }
        &.trashcan-visible {
            right: 20%;
        }
        &.trashcan-invisible {
            right: 0%;
        }
    }
    @media(min-width: 750px) {
        .sort-handle {
            width: 10%;
        }
        .tasklist-header {
            width: 110%;
        }
        .tasklist-title-container {
            width: 90%;
        }
        .tasklist-title {
            padding-right: 5%;
        }
        .trashcan {
            width: 10%;
        }
        &.trashcan-visible {
            right: 10%;
        }
        &.trashcan-invisible {
            right: 0%;
        }
    }

</style>

<template>

    <div
        v-bind:class="{
            'trashcan-visible': trashcanVisible, 
            'trashcan-invisible': trashcanInvisible
        }"
        class="tasklist-header">
        <div class="sort-handle">
            <i class="fa fa-hand-paper-o sort-handle-icon"></i>
        </div>
        <v-touch 
            v-on:tap="navigate" 
            v-on:swipeleft="showTrashcan"
            v-on:swiperight="hideTrashcan"
            class="tasklist-title-container">
            <h1 class="tasklist-title">{{ title }}</h1>
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
    Vue.use(VueTouch);

    export default {
        name: 'tasklist-header',
        props: ['title', 'listId'],
        data: function() {
            return {
                trashcanInvisible: true,
                trashcanVisible: false
            };
        },
        methods: {
            navigate: function(index) {
                // send parent information about where to navigate to.
                this.$emit('navigate', `/tasklist/${ this.listId }`);
            },
            showTrashcan: function(e) {
                this.trashcanInvisible = false;
                this.trashcanVisible = true;
            },
            hideTrashcan: function(e) {
                this.trashcanInvisible = true;
                this.trashcanVisible = false;
            },
            deleteTasklist(listId) {
                // this masks a bug where the css state for a deleted item is
                // somehow transferred to the adjacent on in the dom.
                this.trashcanVisible = false;
                this.trashcanInvisible = true;
                this.$store.state.tasklists.splice(listId, 1);
            }
        }
    };

</script>
