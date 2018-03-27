<style lang="scss">

    @import '~Common/style/themify.scss';
    @import '../../style/themes.scss';

    .privacy-policy-container {
        padding: 5%;
    }
</style>

<template>
    <div class="privacy-policy-container">
        <h1>Privacy Policy</h1>
        <privacy-policy></privacy-policy>
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
