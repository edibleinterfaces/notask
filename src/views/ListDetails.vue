<style>

    .list-details-container {
        height: 100%;
        width: 100%;
    }

</style>
<template>

    <div class="list-details-container">
        <tasklist-details></tasklist-details>
        <dashboard></dashboard>
    </div>

</template>
<script>

    import Dashboard from '../components/Dashboard';

    export default {
        name: 'list-view',
        components: {

        }
    };

</script>
