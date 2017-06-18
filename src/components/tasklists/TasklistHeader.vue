<style lang="scss">

    .tasklist-header {
        display: flex;
        width: 100%;
        font-size: 0;
        background: whitesmoke;

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
    }

    .trashcan-visible {
        color: red;
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
        .tasklist-title {
            width: 80%;
        }
        .sort-handle {
            width: 20%;
        }
    }
    @media(min-width: 750px) {
        .tasklist-title {
            width: 90%;
        }
        .sort-handle {
            width: 10%;
        }
    }

</style>

<template>

    <div
        v-on:click="navigate" 
        class="tasklist-header">
        <div class="sort-handle">
            <i class="fa fa-hand-paper-o sort-handle-icon"></i>
        </div>
        <v-touch 
            v-on:swiperight="showTrashcan"
            v-on:swipeleft="hideTrashcan"
            v-bind:class="{ 'trashcan-visible': trashcanVisible }"
            class="tasklist-title"
            >
                {{ title }}
        </v-touch>
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
                trashcanVisible: false
            };
        },
        methods: {
            navigate: function(index) {
                // send parent information about where to navigate to.
                this.$emit('navigate', `/tasklist/${ this.listId }`);
            },
            showTrashcan: function(e) {
                this.trashcanVisible = true;
            },
            hideTrashcan: function(e) {
                this.trashcanVisible = false;
            }
        }
    };

</script>
