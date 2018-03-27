<style lang="scss">

    @import '~Common/style/themify.scss'; 
    @import '../../../style/themes.scss'; 

    .theme-select-container {
        height: 100%; 
        width: 100%;
        align-content: center;
        justify-content: center;
        display: flex;
        //flex-flow: wrap;
        -webkit-flex-flow: row wrap;
        justify-content: space-around;

        ul, li, h1 {
            margin: 0;
            padding: 0;
        } 
        .selected {
            background: lightgray;
            padding: 5%;

        }

        @media(max-width: 750px) {
            .color-grid {
                height: 80px;
                width: 80px;
            }
        }
        @media(min-width: 751px) {
            .color-grid {
                height: 160px;
                width: 160px;
            }
        }
    }
</style>

<template>
    <ul class="theme-select-container">
        <ul 
            v-for="(colors, name, index) in appThemes"
            @click="selectTheme(name)" 
            :class="{ 'current-theme': isCurrentTheme(name)}"
            class="color-theme">

            <li><h3>{{name}}</h3></li>

            <app-colorgrid 
                class="color-grid"
                :num-rows="2" 
                :colors="colors" 
                :class="{selected: isCurrentTheme(name)}" />
        </ul>
    </ul>
</template>

<script>
    import store from '../../store';
    import styles from '../../../style/themes.scss'; 
    import utils from 'Common/utils';
    import ColorGrid from './ColorGrid';

    export default {
        name: 'ei-theme-select',
        components: {
            'app-colorgrid': ColorGrid,
        },
        data: function() {
            return {
                appThemes: utils.cssToThemesObj(styles),
            };
        },
        methods: {
            selectTheme(newTheme) {
                store.commit('updateTheme', newTheme);
            },
            isCurrentTheme(name) {
                return name == store.getters.theme;
            }
        },
        computed: {
            currentTheme() {
                return store.getters.theme;
            }

        }
    };
</script>
