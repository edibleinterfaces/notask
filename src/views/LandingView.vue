<style lang="scss">

    @import '../../style/themes.scss';
    @import '../../../common/style/themify.scss';

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
                .do { color: themed('landing-do'); }
                .it { color: themed('landing-it'); }
            }
        }

    }
</style>

<template>
    <router-link to="/tasklists">
        <div class="landing-container">
            <div class="title">
                <span class="do">do</span><span class="it">it</span>
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
