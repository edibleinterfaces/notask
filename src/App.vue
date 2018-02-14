<template>
    <div id="app" class="theme" :class="themeClass">
        <modal></modal>
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
