<style lang="scss">

    .tasklist-header {

        right: 0%;
        position: relative;
        display: flex;
        font-size: 0;
        background: whitesmoke;

        &.trashcan-invisible {
            -webkit-transform: translateX(0vw);
            transform: translateX(0vw);
            -webkit-transition: -webkit-transform 0.1s ease-in-out;
        }
        &.sortable-chosen > .sort-handle {
            background: aquamarine;
            > .fa-hand-paper-o {
                color: white;
            }
        }

        .sort-handle,
        .tasklist-title {
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
        .tasklist-title {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding-right: 10%;
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
        .tasklist-title {
            width: 80%;
        }
        .sort-handle {
            width: 20%;
        }
        .trashcan {
            width: 20%; 
        }
        &.trashcan-visible {
            -webkit-transform: translateX(-20vw);
            transform: translateX(-20vw);
            -webkit-transition: -webkit-transform 0.1s ease-in-out;
        }
        &.trashcan-invisible {
            -webkit-transform: translateX(0vw);
            transform: translateX(0vw);
            -webkit-transition: -webkit-transform 0.1s ease-in-out;
        }
    }
    @media(min-width: 750px) {
        .tasklist-header {
            width: 110%;
        }
        .tasklist-title {
            width: 90%;
        }
        .sort-handle {
            width: 10%;
        }
        .trashcan {
            width: 10%; 
        }
        &.trashcan-visible {
            -webkit-transform: translateX(-10vw);
            transform: translateX(-10vw);
            -webkit-transition: -webkit-transform 0.1s ease-in-out;
        }
        &.trashcan-invisible {
            -webkit-transform: translateX(0vw);
            transform: translateX(0vw);
            -webkit-transition: -webkit-transform 0.1s ease-in-out;
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
            class="tasklist-title">
                {{ title }}
        </v-touch>
        <div v-on:click="deleteTasklist(listId)" class="trashcan"> 
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
            deleteTasklist(index) {
                this.$store.state.tasklists.splice(index,1);
            }
        }
    };

</script>
