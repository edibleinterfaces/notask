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
            </ul>
        </div>
        <dashboard></dashboard>
    </div>
</template>

<script>
    import Dashboard from '../components/Dashboard';

    export default {
        data: function() {
            return {};
        },
        components: {
            Dashboard
        }
    };
</script>
