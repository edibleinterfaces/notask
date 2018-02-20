<style lang="scss">
    .color-icon {
        display: flex;
        position: relative;
        width: 30px;
        height: 30px;
        border-radius: 5%;
        opacity: 0.8;
        margin-right: 200px;

        &:hover {
            opacity: 1;
        } 

        .color-strip {
            width: 25%;
            height: 100%;
        }
        .color-strip:nth-child(1) {
            background: rgb(3, 169, 244);
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
        }
        .color-strip:nth-child(2) {
            background: rgb(0, 150, 136);
        }
        .color-strip:nth-child(3) {
            background: rgb(244, 67, 54);
        }
        .color-strip:nth-child(4) {
            background: rgb(158, 158, 158);
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
        }
    }
</style>
<template>
    <div class="color-icon">
        <div class="color-strip"></div>
        <div class="color-strip"></div>
        <div class="color-strip"></div>
        <div class="color-strip"></div>
    </div>
</template>
<script>
    export default {
        name: 'color-icon'
    }
</script>
