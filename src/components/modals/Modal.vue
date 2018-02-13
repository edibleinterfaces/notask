<style lang="scss">
    .modal {
        display: none;
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 1000;
        width: 80%;
        height: 80%;
        margin-top: 10vh;
        margin-bottom: 10vh;
        margin-left: 10vw;
        margin-right: 10vw;
        border: 1px solid lightgray;
        background: whitesmoke;
    }    
    .modal-close {
        position: absolute;
        top: 3%;
        right: 5%;
    }
    .active {
        display: block;
    }
</style>

<template>

    <div class="modal" v-bind:class="{'active': active }">
        <i @click="modalClose" class="modal-close fa fa-close"></i>
        <slot></slot>
    </div>

</template>

<script>
    export default {
        name: 'modal',
        props: ['active'],
        data() {
            return {};
        },
        methods: {
            modalClose() {
                this.$emit('modalclose');
            }
        }
}
</script>
