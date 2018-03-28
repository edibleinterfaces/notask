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
            -webkit-overflow-scrolling: touch; 
            .privacy-policy {
                padding: 5%;
                line-height: 1.5em;
            }
        }
        .setting {
            font-size: 1.5em;
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
                </div>
            </ei-collapsible>
            <ei-collapsible>
                <h1 class="setting" slot="header">Appearance</h1>
                <div slot="content">
                    <app-appearance/>
                </div>
            </ei-collapsible>
            <ei-collapsible :open="true">
                <h1 class="setting" slot="header">Privacy Policy</h1>
                <div slot="content">
                    <ei-privacy-policy class="privacy-policy" />
                </div>
            </ei-collapsible>

        </div>
        <app-dashboard></app-dashboard>
    </div>
</template>

<script>
    import Dashboard from '../components/Dashboard';
    import Collapsible from 'Common/components/Collapsible';

    import Appearance from '../components/settings/Appearance';
    import Storage from '../components/settings/Storage';
    import PrivacyPolicy from 'Common/components/PrivacyPolicy';

    export default {
        name: 'app-settings-view',
        components: { 
            'ei-collapsible': Collapsible, 
            'ei-privacy-policy': PrivacyPolicy, 
            'app-dashboard': Dashboard, 
            'app-appearance': Appearance, 
            'app-storage': Storage 
        }
    };
</script>
