<style lang="scss">

    @import '~Common/style/themify.scss'; 
    @import '../../../style/themes.scss'; 

    .theme-select-container {
        background: white;
        height: 100%; 
        width: 100%;
        align-content: center;
        justify-content: center;
        display: flex;
        //flex-flow: wrap;
        -webkit-flex-flow: row wrap;
        justify-content: space-around;

        .color-theme {
            text-align: center;
            display: inline-block;
            align-content: center;
            justify-content: center;
        }
        .color-row {
            display: inline-block;
            display: block;
            margin: 0 auto;
            padding: 0;
        }
        .color {
            padding: 0;
            margin: 0 auto;
            display: inline-block;
            height: 50%;
            width: 50%;
        }
        ul, li, h1 {
            margin: 0;
            padding: 0;
        } 

        @media(max-width: 750px) {
            .color-row {
                height: 80px;
                width: 80px;
            }
        }
        @media(min-width: 751px) {
            .color-row {
                height:160px;
                width: 160px;
            }
        }
        @media(min-width: 400px) {
            .color-row {
                height: 60px;
                width: 60px;
            }
        }
    }
</style>

<template>
    <ul class="theme-select-container">
        <ul class="color-theme" @click="selectTheme(index)" v-for="(themes, themeName) in appThemes">
            <li>
                <h3>{{themeName}}</h3>
            </li>
            <ul class="color-row">
                <li 
                    v-for="color in themes.slice(0,2)"
                    :style="{background: color}" 
                    class="color">
                </li>
                <li 
                    v-for="color in themes.slice(2)"
                    :style="{background: color}" 
                    class="color">
                </li>
            </ul>
        </ul>
    </ul>
</template>

<script>
    import store from '../../store';
    import styles from '../../../style/themes.scss'; 
    import utils from 'Common/utils';


    export default {
        name: 'ei-theme-select',
        data: function() {
            return {
                appThemes: utils.cssToThemesObj(styles)
            };
        },
        methods: {
            selectTheme(index) {
                //console.log('updateThemes', this.appThemes[index].name);
            }
        }

    };
</script>
