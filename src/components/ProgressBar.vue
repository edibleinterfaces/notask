<style lang="scss">
    @import '../../style/themes.scss';
    @import '../../../../common/style/themify.scss';
    .progress-bar-container {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 1px;
        width: 100%;
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
                console.log(this.value);
                return { width: `${this.value * 100}%` };
            }
        }
    };
</script>
