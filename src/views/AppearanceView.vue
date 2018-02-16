<style lang="scss">

    @import '../../../../common/style/themify.scss'; 
    @import '../../style/themes.scss'; 

    .appearance-container {
        height: 100%; 
        width: 100%;
        @include themify($themes) {
            background: themed('appearance-view-bg');
        }
    }
</style>

<template>
    <div class="appearance-container">

        <label>theme:</label>
        <select v-on:change="updateTheme" :value="theme">
            <option v-for="theme in themes">{{theme}}</option>
        </select>

        <label>font-size:</label>
        <select v-on:change="updateFontSize" :value="fontSize">
            <option v-for="fontSize in fontSizes">{{ fontSize }}</option>
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
            },
            updateFontSize(event) {
                store.commit('updateFontSize', event.target.value);
            }
        },
        computed: {
            themes() {
                return store.getters.themes;
            },
            theme() {
                return store.getters.theme;
            },
            fontSize() {
                return store.getters.fontSize;
            },
            fontSizes() {
                return store.getters.fontSizes;
            }
        }
    };
</script>
