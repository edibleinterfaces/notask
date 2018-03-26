<style lang="scss">

    @import '~Common/style/themify.scss';
    @import '../../style/themes.scss';

    .privacy-policy-container {
    }
</style>

<template>
    <div class="privacy-policy-container">
        <privacy-policy></privacy-policy>
        <app-dashboard/>
    </div>
</template>

<script>
    import AppDashboard from '../components/Dashboard';
    import PrivacyPolicy from 'Common/components/PrivacyPolicy';

    export default {
        name: 'PrivacyPolicyView',
        components: { PrivacyPolicy, AppDashboard }
    };
</script>
