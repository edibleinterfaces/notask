<style lang="scss">

    @import '~Common/style/themify.scss'; 
    @import '../../../style/themes.scss'; 

    .appearance-container {
        height: 100%; 
        width: 100%;
        @include themify($themes) {
            background: themed('appearance-view-bg');
        }
        ul, li {
            margin: 0;
            padding: 0;
        }

        .appearance-option {
            padding: 2%;
            background: white;
        }
    }
</style>

<template>
    <div class="appearance-container">
        <ul>
            <li class="appearance-option">
                <label>App Theme:</label>
                <theme-select />
                <!--<select v-on:change="updateTheme" :value="theme">
                    <option v-for="(theme, index) in themes" :key="index">{{theme}}</option>
                </select>
                -->
            </li>
            <li class="appearance-option">
                <label>Font Size:</label>
                <select v-on:change="updateFontSize" :value="fontSize">
                    <option v-for="(fontSize, index) in fontSizes" :index="index">{{ fontSize }}</option>
                </select>
            </li>
        </ul>
    </div>
</template>

<script>
    import store from '../../store';
    import ThemeSelect from './ThemeSelect';

    export default {
        name: 'app-appearance',
        components: { ThemeSelect },
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
