<template>
    <div id="app">
        <modal></modal>
        <router-view></router-view>
    </div>
</template>

<script>
import disablePulldownRefresh from './services/disablePulldownRefresh';
import Modal from './components/modals/Modal'; 

disablePulldownRefresh();

export default {
    name: 'app',
    components: {
        Modal
    }
}
</script>
