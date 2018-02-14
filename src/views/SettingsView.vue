<style lang="scss">

    @import '../../style/themes.scss';

    .settings-view-container {
        height: 100%;
        width: 100%;
        .settings-view {
            height: 90%;
            width: 100%;
            @include themify($themes) {
                background: themed('primary');
            }
            a {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                text-decoration: none;
                height: 20%;
                width: 100%;
                border-bottom: 1px solid lightgray;
                @include themify($themes) {
                    background: themed('secondary');
                }
            }
        }
    }
</style>

<template>
    <div class="settings-view-container">
        <div class="settings-view">
            <router-link to="/settings/storage">Storage</router-link>
            <router-link to="/settings/sync">Sync from the Cloud</router-link>
            <router-link to="/settings/appearance">Appearance</router-link>
            <router-link to="/settings/about">About NoTask</router-link>
        </div>
        <dashboard/>
    </div>
</template>

<script>
    import Dashboard from '../components/Dashboard';

    export default {
        name: 'SettingsView',
        components: { Dashboard }
    };
</script>
