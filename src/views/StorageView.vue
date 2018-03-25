<style lang="scss">
    .storage-view-container {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        .storage-view {
            height: 90%;
            width: 100%;
            background: aquamarine;
            ul.storage-options {
                margin: 0;
                padding: 0;
                height: 100%;
            }
            li.storage-option {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 20%;
                width: 100%;
                border-bottom: 1px solid lightgray;
                background: whitesmoke;
                .setting-slide-icon {
                    position: absolute;
                    top: calc(50% - 2vh);
                    right: 5%;
                    font-size: 4vh;
                    color: lightgray;
                } 
            }
        }
    }
</style>

<template>
    <div class="storage-view-container">
        <div class="storage-view">
            <ul class="storage-options">
                <li @click="resetStorage" class="storage-option">Reset storage</li>
                <li @click="resetTasklists" class="storage-option">Clear Tasklists</li>
                <li class="storage-option">Import</li>
                <li @click="exportStore" class="storage-option">Export</li>
            </ul>
        </div>
        <dashboard></dashboard>
    </div>
</template>

<script>
    import Dashboard from '../components/Dashboard';
    import store from '../store';
    import converter from '../services/converter';

    export default {
        components: { Dashboard },
        methods: {
            resetStorage() {
                store.commit('clearTasklists');
            },
            resetTasklists() {
                store.commit('resetStorage');
            },
            exportStore() {
                const data = converter.convert(store.getters.tasklists, store.getters.exportFormat);
                console.log(data);
            }


        }
    };
</script>
