<style lang="scss">

    .dashboard {

        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        background: lightgray;
        border-top: 1px solid #f1f1f1;

        .settings-icons-container {
            background: white;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;

            .add-tasklist-icon,
            .settings-icon,
            .settings-icon {
                color: lightgray;
            }

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
            .settings-icons-container {
                .add-tasklist-icon,
                .settings-icon {
                    font-size: 15vh;
                }
            }
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
            width: 15%;
        }
    }
</style>

<template>
    <div class="dashboard">
        <div class="settings-icons-container">
            <i
                v-on:click="navigate"
                class="fa fa-cog settings-icon"></i>
            <i 
                v-show="['ListsView','ListView'].includes($route.name)"
                v-on:click="add" 
                class="fa fa-plus add-tasklist-icon"></i>
        </div>
    </div>
</template>

<script>

    import store from '../store';

    export default {
        name: 'dashboard',
        props: ['listId'],
        methods: {
            navigate() {
                if (this.$route.name === 'SettingsView') { 
                    this.$router.back();
                } else {
                    this.$router.push('/settings');
                }
                console.log(this.$router);
            },
            add() {
                if (this.$route.name === 'ListView') 
                    store.commit('addTask', this.listId);
                if (this.$route.name === 'ListsView') 
                    store.commit('addTasklist');
            }
        }
    };
</script>
