<style lang="scss">
    .landing-container {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: white;
    }
    .title {
        text-decoration: none;
        font-size: 10vw;
        font-weight: 600;
        padding: 5%;
    }
    .no {
        color: aquamarine;
    }
    .title {
        color: salmon;
    }
    .marquee-close-icon {
        color: #ececec;
    }
    .marquee-close-icon:hover {
        color: salmon;
    }

</style>
<template>
    <div class="landing-container">
        <router-link to="/tasklists" class="title">
            <span class="no">No</span><span class="task">Task</span>
        </router-link>
    </div>
</template>

<script>

import Tasklist from './../components/tasklists/Tasklist';
import Task from './../components/tasklists/Task';

export default {
  name: 'landing-page',
  components: {
      Tasklist,
      Task,
  },
  props: ['tasklists'],
  data () {
      return {
      };
  }
}
</script>

<style>
</style>
