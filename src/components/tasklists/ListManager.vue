<style>
</style>

<template>
    <div class="list-manager">
        <tasklist></tasklist>
        <router-view></router-view>
    </div>
</template>

<script>
    import Tasklist from './Tasklist';

    export default {
        name: 'list-manager',
        components: {
            Tasklist
        },
        data: function() {
            return {
            };
        }
    };
</script>
