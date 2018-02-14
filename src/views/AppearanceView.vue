<style lang="scss">
    .appearance-container {
        height: 100%; 
        width: 100%;
        background: lightgray;
    }
</style>

<template>
    <div class="appearance-container">
        <label>theme:</label>
        <select v-on:change="updateTheme" :value="theme">
            <option v-for="theme in themes">{{theme}}</option>
        </select>
    </div>
</template>

<script>
    import Dashboard from '../components/Dashboard';
    import store from '../store';

    export default {
        name: 'SettingsView',
        components: { Dashboard },
        methods: {
            updateTheme(event) {
                store.commit('updateTheme', event.target.value);
            }
        },
        computed: {
            themes() {
               return store.getters.themes;
            },
            theme() {
                return store.getters.theme;
            }
        }
    };
</script>
