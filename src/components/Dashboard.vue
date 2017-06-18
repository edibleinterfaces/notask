<style lang="scss">

    .dashboard {

        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        background: lightgray;

        .settings-icon-container {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: auto;

            .settings-icon {
                font-size: 5vh;
            }
        }

    }

    @media (max-height:400px) {
        .dashboard {
            height: 25%; 
        }

    }
    @media (min-height: 400px) {
        .dashboard {
            height: 10%; 
        }

    }
    @media(max-width: 750px) {
        .settings-icon-container {
            width: 20%;
        }
    }
    @media(min-width: 750px) {
        .settings-icon-container {
            width: 10%;
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
