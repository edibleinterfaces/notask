<style lang="scss">
    .storage-view-container {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        .storage-view {
            height: 90%;
            width: 100%;
            background: aquamarine;
            ul.storage-options {
                margin: 0;
                padding: 0;
                height: 100%;
                background: white;
            }
            li.storage-option {
                background: white !important;  /* fixme: insert macro for themed bg color */
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                padding: 5%;
                border-bottom: 1px solid lightgray;
                background: white;
                .setting-slide-icon {
                    position: absolute;
                    top: calc(50% - 2vh);
                    right: 5%;
                    font-size: 4vh;
                    color: lightgray;
                } 
            }
        }
    }
</style>

<template>
    <div class="storage-view-container">
        <div class="storage-view">
            <ul class="storage-options">
                <li @click="resetStore" class="storage-option">Reset storage</li>
                <li @click="resetTasklists" class="storage-option">Clear Tasklists</li>
                <li class="storage-option">Import</li>
                <li @click="exportStore" class="storage-option">Export</li>
                <li v-if="signedIntoDrive" v-on:click="signOutOfGoogleDrive" class="storage-option">Sign out of Google Drive</li>
                <li v-else v-on:click="signIntoGoogleDrive" class="storage-option">Sign into Google Drive</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import converter from '../../services/converter';
    import store from '../../store';
    
    export default {
        name: "app-storage",
        computed: {
            signedIntoDrive() {
                return store.getters.signedIntoDrive;
            }
        },
        methods: {
            resetTasklists() {
                store.commit('resetTasklists');
            },
            resetStore() {
                store.commit('resetStore');
                this.$router.push('/');
            },
            exportStore() {
                const data = converter.convert(
                    store.getters.tasklists, 
                    store.getters.exportFormat
                );
            },
            signIntoGoogleDrive() {
                store.dispatch('signIn');
            },
            signOutOfGoogleDrive() {
                store.dispatch('signOut');
            }

        }
    };
</script>
