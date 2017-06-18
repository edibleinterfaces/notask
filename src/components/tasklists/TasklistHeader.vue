<style lang="scss">

    .tasklist-header {
        display: flex;
        height: calc(100%/5);
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
        }
        .sort-handle-icon {
            font-size: 5vh;
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

    <div v-on:click="navigate" class="tasklist-header">
        <div class="sort-handle">
            <i class="fa fa-hand-paper-o sort-handle-icon"></i>
        </div>
        <div class="tasklist-title">{{ title }}</div>
    </div>

</template>

<script>

    export default {
        name: 'tasklist-header',
        props: ['title', 'listId'],
        methods: {
            navigate: function(index) {
                // send parent information about where to navigate to.
                this.$emit('navigate', `/tasklist/${ this.listId }`);
            }
        }
    };

</script>
