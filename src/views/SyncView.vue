<style lang="scss">
    .sync-view-container {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        .sync-view {
            height: 90%;
            width: 100%;
            background: aquamarine;
            ul.sync-options {
                margin: 0;
                padding: 0;
                height: 100%;
            }
            li.sync-option {
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
    <div class="sync-view-container">
        <div class="sync-view">
            <ul class="sync-options">
                <li class="sync-option">Sync Option A</li>
                <li class="sync-option">Sync Option B</li>
                <li class="sync-option">Sync Option C</li>
            </ul>
        </div>
        <dashboard></dashboard>
    </div>
</template>

<script>
    import Dashboard from '../components/Dashboard';

    export default {
        name: 'SyncView',
        data: function() {
            return {};
        },
        components: {
            Dashboard
        }
    };
</script>
