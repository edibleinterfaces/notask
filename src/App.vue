<template>
    <div id="app">
        <modal></modal>
        <router-view></router-view>
    </div>
</template>

<script>

import Modal from './components/modals/Modal'; 
export default {
    name: 'app',
    components: {
        Modal
    }
}

</script>
