<style>
    .tasklist-header {
        height: 20%;
        width: 100%;
        background: yellow;
        border: 1px solid black;
    }
</style>

<template>
    <div class="tasklist-header">{{ title }}</div>
</template>

<script>

    export default {
        name: 'tasklist-header',
        props: ['title']
    };

</script>
