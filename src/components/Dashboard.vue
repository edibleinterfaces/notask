<style lang="scss">

    @import '../../style/themes.scss';
    @import '~Common/style/themify.scss';

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
            .add-tasklist-icon,
            .settings-icon {
                color: themed('dashboard-icons');
            }
            .google-drive-icon {
                color: themed('drive-signed-out');
            }
            .google-drive-icon:hover {
                color: themed('drive-hover');
            }

            .drive-signed-in {
                color: themed('drive-signed-in');
            }
        }
        .add-tasklist-icon,
        .google-drive-icon,
        .settings-icon {
            font-size: 5vh;
        }
        .add-tasklist-icon {
            margin-left: auto;
            text-align: center;
        }
        .google-drive-icon {
            margin-right: auto;
            text-align: left;
        }
        .settings-icon {
            text-align: center;
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
    <div :class="dashboardClassObj" v-on:click.self="pulse" class="dashboard">
        <i v-on:click="navigate" :class="settingsIconClassObj" class="settings-icon"></i>
        <i :class="{'drive-signed-in': signedIn}" class="fab fa-google-drive google-drive-icon"></i>
        <i v-show="isAListView" v-on:click="add" class="fas fa-plus add-tasklist-icon"></i>
    </div>
</template>
<script>

    import store from '../store';
    import googleDrive from '../services/googleDrive';
    import { init, destroy } from '../services/connectivity';
    import ColorIcon from './ColorIcon';

    export default {
        name: 'app-dashboard',
        data: function() {
            return {
                dashboardClassObj: { pulse: false },
                driveIconClassObj: {
                   'drive-signed-in': this.online,
                },
                settingsIconClassObj: {
                    'far fa-circle': this.$route.name === 'ListsView', 
                    'fas fa-circle': this.$route.name !== 'ListsView', 
                },
                pulseTimeMS: 100
            };
        },
        props: ['listId'],
        components: { ColorIcon },
        created: function() {
            googleDrive.authenticate();
            init();
        },
        destroyed: function() {
            destroy();
        },
        computed: {
            signedIn: function() {
                return store.getters.signedIntoDrive;
            },
            online: function() {
                return store.getters.online;
            },
            isAListView: function() {
                return ['ListsView','ListView'].includes(this.$route.name);
            }
            
        },
        methods: {
            pulse() {
                this.$emit('list-top');
                this.dashboardClassObj.pulse = true;
                setTimeout(()=>{ this.dashboardClassObj.pulse = false; }, this.pulseTimeMS);
            },
            navigate() {
                if (this.$route.name === 'SettingsView')
                    this.$router.back();
                else
                    this.$router.push('/settings');
            },
            add() {
                if (this.$route.name === 'ListView') 
                    store.commit('addTask', this.listId);
                if (this.$route.name === 'ListsView') { 
                    store.commit('addTasklist');
                    this.$emit('list-bottom');
                }
            }
        }
    };
</script>
