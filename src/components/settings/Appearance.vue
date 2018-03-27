<style lang="scss">

    @import '~Common/style/themify.scss'; 
    @import '../../../style/themes.scss'; 

    .appearance-container {
        height: 100%; 
        width: 100%;
        @include themify($themes) {
            background: white;
            //background: themed('appearance-view-bg');
        }
        ul, li {
            margin: 0;
            padding: 0;
        }
        .font-select-slider {
            width: 30%;
            border: 1px solid black;
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
                <app-theme-select />
            </li>
            <li class="appearance-option">
                <label>Font Size: {{ fontSize }}</label>
                <ei-slide-select 
                    :options="fontSizes" 
                    :selected="fontSize" 
                    :on-update="updateFontSize"
                    class="font-select-slider" /> 
            </li>
        </ul>
    </div>
</template>

<script>
    import store from '../../store';
    import ThemeSelect from './ThemeSelect';
    import SlideSelect from 'Common/components/SlideSelect';

    export default {
        name: 'app-appearance',
        data: function() {
            return {};
        },
        components: { 
            'app-theme-select': ThemeSelect, 
            'ei-slide-select': SlideSelect
        },
        methods: {
            updateTheme(event) {
                store.commit('updateTheme', event.target.value);
            },
            updateFontSize(index) {
                let newFontSize = this.fontSizes[index];
                store.commit('updateFontSize', newFontSize);
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
