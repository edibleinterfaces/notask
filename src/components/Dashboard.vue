<style lang="scss">

    .dashboard {

        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        background: lightgray;

        .settings-icons-container {
            width: 100%;
            display: flex;
            align-items: center;

            .add-tasklist-icon,
            .settings-icon {
                font-size: 5vh;
                text-align: center;
            }
            .add-tasklist-icon {
                margin-left: auto;
            }
            .settings-icon {
                margin-right: auto;
            }

        }


    }

    @media (max-height:400px) {
        .dashboard {
            height: 25%; 
        }

    }
    @media (min-height: 400px) {
        .dashboard {
            height: 10%; 
        }

    }
    @media(max-width: 750px) {
        .settings-icons-container  i {
            width: 20%;
        }
    }
    @media(min-width: 750px) {
        .settings-icons-container  i{
            width: 10%;
        }
    }
</style>

<template>
    <div class="dashboard">
        <div class="settings-icons-container">
            <i class="fa fa-cog settings-icon"></i>
            <i 
                v-on:click="addTasklist" 
                class="fa fa-plus add-tasklist-icon"></i>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'dashboard',
        methods: {
            addTasklist: function() {
                console.log('add tasklist');
                console.log(this.$store.state.tasklists.push(this.$store.state.tasklists.slice(-1)[0]));
            }
        }
    };
</script>
