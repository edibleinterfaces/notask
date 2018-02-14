<style lang="scss">
    @import 'style/colors.scss';
    @import 'style/themes.scss';

    .theme {
        height: 100%;
        width: 100%;
        text-decoration: none;
    }

    .landing-container {

        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        .title {
            font-size: 10vw;
            font-weight: 600;
            padding: 5%;
            @include themify($themes) {
                .no { color: themed('primary'); }
                .task { color: themed('secondary'); }
            }
        }

    }
</style>

<template>
    <router-link to="/tasklists" class="theme" :class="themeClass">
        <div class="landing-container">
            <div class="title">
                <span class="no">No</span><span class="task">Task</span>
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
              return `theme-${ store.getters.theme }`;
          }
      }
    }
</script>
