<style lang="scss">
    .dashboard {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: 10%; 
        background: lightgray;


        .settings-icon-container {
            width: 20%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: auto;
            .settings-icon {
                font-size: 5vh;
            }
        }
    }
</style>

<template>
    <div class="dashboard">
        <div class="settings-icon-container">
            <i class="fa fa-cog settings-icon"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'dashboard',
    };
</script>
