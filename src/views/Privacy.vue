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
        <ei-privacy-policy></ei-privacy-policy>
    </div>
</template>

<script>
    import PrivacyPolicy from 'Common/components/PrivacyPolicy';

    export default {
        name: 'PrivacyPolicyView',
        components: { 'ei-privacy-policy': PrivacyPolicy }
    };
</script>
