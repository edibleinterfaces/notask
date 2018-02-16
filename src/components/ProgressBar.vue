<style lang="scss">
    @import '../../style/themes.scss';
    @import '../../../../common/style/themify.scss';
    .progress-bar-container {
        position: fixed;
        top: 0;
        left: 0;
        height: 2px;
        width: 100%;
        z-index: 1000;
        @include themify($themes) {
            background: themed('tasklist-progress-bar-bg');
        }
        & > .progress {
            height: 100%;
            @include themify($themes) {
                background: themed('tasklist-progress-bar');
            }
        }
    }
</style>
<template>
    <div class="progress-bar-container">
        <div class="progress" :style="progress"></div>
    </div>
</template>
<script>
    export default {
        name: 'ProgressBar',
        props: ['value'],
        computed: {
            progress() {
                return { width: `${this.value * 100}%` };
            }
        }
    };
</script>
