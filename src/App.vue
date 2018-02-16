<style>
    html,
    body,
    #app {
        height: 100%;
        width: 100%;
    }
    body, 
    body * {
        box-sizing: border-box;
        font-family: "Comfortaa", cursive;
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
    }
</style>
<template>
    <div id="app" class="theme" :class="themeClass">
        <router-view></router-view>
    </div>
</template>

<script>

    import disablePulldownRefresh from './services/disablePulldownRefresh';
    import Modal from './components/modals/Modal'; 
    import store from './store';

    disablePulldownRefresh();

    export default {
        name: 'app',
        components: { Modal },
        computed: {
            themeClass() {
                return `theme-${store.getters.theme}`; 
            }
        }
    }

</script>
