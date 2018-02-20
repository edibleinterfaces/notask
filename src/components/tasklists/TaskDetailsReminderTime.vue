<style lang="scss">
</style>

<template>
    <div class="task-details-reminder-time-config">
        <vue-timepicker 
            @change="setTime"
            :minuteInterval="5" 
            format="HH:mm:ss A">
        </vue-timepicker>
    </div>
</template>

<script>
    import VueTimepicker from 'vue2-timepicker';
    import Vue from 'vue';

    Vue.use(VueTimepicker);

    export default {
        name: 'task-details-reminder-time',
        components: {},
        methods: {
            setTime(time) {
            }
        }
    };
</script>
