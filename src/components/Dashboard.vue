<style lang="scss">

    @import '../../style/themes.scss';
    @import '~Common/style/themify.scss';

    .dashboard {
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        border-top: 1px solid rgba(0,0,0,0.15);
        @include themify($themes) {
            background: themed('dashboard-bg');
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
    <div v-pulse.self="pulseConfig" class="dashboard">
        <i v-on:click="navigate" :class="settingsIconClassObj" class="settings-icon"></i>
        <i v-if="cloudEnabled" :class="{'drive-signed-in': signedIn && online, 'google-drive-icon': online }" @click="syncToCloud" class="fab fa-google-drive google-drive-icon"></i>
        <i v-show="isAListView" v-on:click="add" class="fas fa-plus add-tasklist-icon"></i>
    </div>
</template>

<script>

    import pulse from 'Common/directives/pulse'
    import connectivity from 'Common/services/connectivity'
    import convert from 'Common/services/converter'
    import cloudProviders from 'Common/services/cloudStorage'
    import store from '../store'


    const { init, destroy } = connectivity(store)

    export default {
        name: 'app-dashboard',
        directives: { pulse },
        data: function() {
            return {
                pulseConfig: {
                    bgColor: 'lightgray',
                    timeout: 200,
                },
                driveIconClassObj: {
                   'drive-signed-in': this.online,
                },
                settingsIconClassObj: {
                    'far fa-circle': ['ListsView','ListView'].includes(this.$route.name),
                    'fas fa-circle': !['ListsView','ListView'].includes(this.$route.name)
                },
            };
        },
        props: ['listId'],
        mounted: function() {
          store.commit('updateConnectivityStatus', window.navigator.onLine)
          init()
        },
        destroyed: function() {
          destroy()
        },
        computed: {
            signedIn: function() {
                return store.getters.signedIntoCloud
            },
            online: function() {
                return store.getters.online
            },
            isAListView: function() {
                return ['ListsView','ListView'].includes(this.$route.name)
            },
            cloudEnabled: function() {
              return store.getters.cloudStorageMethod === 'cloud'
            },
            storageMethod() {
              return store.getters.cloudStorageMethod
            }
            
        },
        methods: {
            syncToCloud(){
              store.dispatch('syncToCloud', {
                cloudProvider: store.getters.cloudProvider,
                content: convert(store.state, 'json'),
                syncFileId: store.getters.syncFileId
              })
            },
            navigate() {
                if (this.$route.name === 'SettingsView')
                    this.$router.back()
                else
                    this.$router.push('/settings')
            },
            add() {
                if (this.$route.name === 'ListView') 
                    store.commit('addTask', this.listId)
                if (this.$route.name === 'ListsView') { 
                    store.commit('addTasklist')
                    this.$emit('list-bottom')
                }
            }
        },
        watch: {
        }
    }
</script>
