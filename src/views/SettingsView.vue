<style lang="scss">
    .settings-view-container {
        height: 100%;
        width: 100%;
        .settings-view {
            height: 90%;
            width: 100%;
            background: aquamarine;
            a {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                text-decoration: none;
                height: 20%;
                width: 100%;
                border-bottom: 1px solid lightgray;
                background: whitesmoke;
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
    <div class="settings-view-container">
        <div class="settings-view">
            <router-link to="/settings/storage">
                Storage
                <i class="fa setting-slide-icon fa-ellipsis-v"></i>
            </router-link>
            <router-link to="/settings/sync">
                Sync
                <i class="fa setting-slide-icon fa-ellipsis-v"></i>
            </router-link>
            <router-link to="/settings/appearance">
                Appearance
                <!--
                    <i class="fa setting-slide-icon fa-ellipsis-v"></i>
                -->
            </router-link>
        </div>
        <dashboard></dashboard>
    </div>
</template>

<script>
    import Dashboard from '../components/Dashboard';

    export default {
        data: function() {
            return {};
        },
        components: {
            Dashboard
        }
    };
</script>
