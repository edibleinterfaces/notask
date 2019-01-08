<style lang="scss">
    @import '~Common/style/themify.scss';
    @import '../style/themes.scss';
    @import '../style/fonts.scss';
    html,
    body,
    #app {
        height: 100%;
        width: 100%;
        max-height: 100%;
        max-width: 100%;
    }
    input {
        -webkit-opacity: 1; 
        background: white;
    },
    body, 
    body * {
        font-family: $font-stack;
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
    }
    a, div {
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        -webkit-tap-highlight-color: transparent;
    }
    a, .router-link-active {
        text-decoration: none;
        color: inherit;
    }
    li {
        list-style-type: none;
    }
</style>
<template>
    <div 
        id="app" 
        class="theme" 
        :style="styleObj"
        :class="[themeClass]">
        <router-view></router-view>
    </div>
</template>

<script>
    import disablePulldownRefresh from './services/disablePulldownRefresh'
    import cloudProviders from 'Common/services/cloudStorage'
    import store from './store'

    export default {
        name: 'app',
        components: {},
        computed: {
            themeClass() {
                return `theme-${store.getters.theme}` 
            },
            styleObj() {
                return `font-size: ${store.getters.fontSize}`
            }
        },
        mounted() {
            disablePulldownRefresh()
            store.dispatch('authenticate', store.getters.cloudProvider)
        }
    }
</script>
