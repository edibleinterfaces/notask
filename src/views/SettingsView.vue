<style lang="scss">

    @import '~Common/style/themify.scss';
    @import '../../style/themes.scss';

    .settings-view-container {
        height: 100%;
        width: 100%;
        @include themify($themes) {
            background: themed('settings-view-bg');
        }
        .settings-container {
            height: 90%;
            width: 100%;
            overflow-y: scroll;
        }
        .setting {
            margin: 0;
            padding: 5%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            height: 20%;
            width: 100%;
            border-bottom: 1px solid lightgray;
            @include themify($themes) {
                color: themed('settings-list-item-font');
                background: themed('settings-view-link-bg');
            }
            & > h1 {
                font-size: 1.5em;
            }
        }
    }
</style>

<template>
    <div class="settings-view-container">
        <div class="settings-container">
            <ei-collapsible>
                <h1 class="setting" slot="header">Storage</h1>
                <div slot="content">
                    <app-storage />
                    <app-sync />
                </div>
            </ei-collapsible>
            <ei-collapsible :open="true">
                <h1 class="setting" slot="header">Appearance</h1>
                <div slot="content">
                    <app-appearance/>
                </div>
            </ei-collapsible>
        </div>
        <app-dashboard></app-dashboard>
    </div>
</template>

<script>
    import AppDashboard from '../components/Dashboard';
    import EiCollapsible from 'Common/components/Collapsible';

    import AppSync from '../components/settings/Sync';
    import AppAppearance from '../components/settings/Appearance';
    import AppStorage from '../components/settings/Storage';

    export default {
        name: 'app-settings-view',
        components: { EiCollapsible, AppDashboard, AppSync, AppAppearance, AppStorage },
        methods: {
            test() {
                console.log(arguments);
            }
        },
    };
</script>
