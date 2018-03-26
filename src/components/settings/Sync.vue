<style lang="scss">
    .sync-view-container {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        .sync-view {
            height: 90%;
            width: 100%;
            background: aquamarine;
            ul.sync-options {
                margin: 0;
                padding: 0;
                height: 100%;
            }
            li.sync-option {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 2%;
                width: 100%;
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
    <div class="sync-view-container">
        <div class="sync-view">
            <ul class="sync-options">
                <li v-if="signedIntoDrive" v-on:click="signOutOfGoogleDrive" class="sync-option">Sign out of Google Drive</li>
                <li v-else v-on:click="signIntoGoogleDrive" class="sync-option">Sign into Google Drive</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import googleDrive from './../../services/googleDrive';
    import store from '../../store';

    export default {
        name: 'app-sync',
        data: function() {
            return {};
        },
        computed: {
            signedIntoDrive() {
                return store.getters.signedIntoDrive;
            }
        },
        components: {},
        methods: {
            signOutOfGoogleDrive: function() {
                googleDrive.handleSignoutClick()
            },
            signIntoGoogleDrive: function() {
                googleDrive.handleAuthClick()
            }
        }
    };
</script>
