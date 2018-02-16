<style lang="scss">
    @import '../../style/themes.scss';
    @import '../../../../common/style/themify.scss';
    .dashboard {
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        border-top: 1px solid #f1f1f1;
        transition: 0.3s background ease-out;
        @include themify($themes) {
        background: themed('dashboard-bg');
            &.pulse {
                background: themed('dashboard-bg-pulse') !important;
            }
        }
        @include themify($themes) {
        .add-tasklist-icon,
        .settings-icon,
        .settings-icon {
            color: themed('dashboard-icons');
        }
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
    @media (max-height:400px) {
        .dashboard {
            height: 25%; 
            .add-tasklist-icon,
            .settings-icon {
                font-size: 15vh;
            }
        }
    }
    @media (min-height: 400px) {
        .dashboard {
            height: 10%; 
        }
    }
    @media(max-width: 750px) {
        .settings-icon,
        .add-tasklist-icon {
            width: 20%;
        }
    }
    @media(min-width: 751px) {
        .settings-icon,
        .add-tasklist-icon {
            width: 15%;
        }
    }
</style>

<template>
    <div v-on:click.self="pulse" class="dashboard" :class="classObj">
            <i v-on:click="navigate" class="fa fa-cog settings-icon"></i>
            <i 
                class="fa fa-plus add-tasklist-icon" 
                v-show="['ListsView','ListView'].includes($route.name)" 
                v-on:click="add"></i>
    </div>
</template>
<script>
    import store from '../store';
    import googleDrive from '../services/googleDrive';
    export default {
        name: 'dashboard',
        data: function() {
            return {
                classObj: {
                   pulse: false
                },
                pulseTimeMS: 100
            };
        },
        props: ['listId'],
        components: {},
        created: googleDrive.authenticate,
        computed: {
            online: function() {
                return store.getters.online;
            },
            distanceFromTop: function() {
                return "50%";
            },

        },
        methods: {
            pulse() {
                this.$emit('list-top');
                this.classObj.pulse = true;
                setTimeout(()=>{ this.classObj.pulse = false; }, this.pulseTimeMS);
            },
            navigate() {
                if (this.$route.name === 'SettingsView')
                    this.$router.back();
                else
                    this.$router.push('/settings');
            },
            add() {

                this.$emit('list-bottom');

                if (this.$route.name === 'ListView') 
                    store.commit('addTask', this.listId);
                if (this.$route.name === 'ListsView') 
                    store.commit('addTasklist');
            }
        }
    };
</script>
