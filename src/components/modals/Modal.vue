<style lang="scss">
    .modal {
        display: none;
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 1000;
        width: 30vw;
        height: 40vh;
        border-radius: 15%;
        border: 1px solid lightgray;
        background: whitesmoke;
    }    
    .active {
        display: block;
    }
</style>

<template>

    <div 
        class="modal" 
        v-bind:class="{'active': active }">
        <h1>Modal Window</h1>
    </div>

</template>

<script>
export default {
  name: 'modal',
  data () {
      return {
          active: false
      };
  }
}
</script>

<style>
</style>
