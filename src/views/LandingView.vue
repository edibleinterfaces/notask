<style lang="scss">

    @import '~Common/style/themify.scss';
    @import '../../style/themes.scss';

    .landing-container {

        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        .title {
            font-size: 5em;
            font-weight: 600;
            padding: 5%;
            @include themify($themes) {
                .no { color: themed('landing-no'); }
                .task { color: themed('landing-task'); }
            }
        }

    }
</style>

<template>
    <router-link to="/tasklists">
        <div class="landing-container">
            <div class="title">
                <span class="no"> ¬ </span>
                <span class="task">Task</span>
            </div>
        </div>
    </router-link>
</template>

<script>
    import Tasklist from './../components/tasklists/Tasklist';
    import Task from './../components/tasklists/Task';
    import store from './../store';

    export default {
      name: 'LandingView',
      components: { Tasklist, Task },
      props: ['tasklists'],
      computed: {
          themeClass() {
              return `theme-${store.getters.theme}`;
          }
      }
    }
</script>
