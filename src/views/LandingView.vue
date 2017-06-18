<style>
    .landing-container {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: turquoise;
    }
    .title {
        text-decoration: none;
        font-size: 10vw;
        font-family: arial;
        font-weight: 600;
    }
    .no {
        color: whitesmoke;
    }
    .title {
        color: salmon;
    }
</style>
<template>
    <router-link to="/tasklists" class="title">
        <div class="landing-container">
                <span class="no">No</span>
                <span class="task">Task</span>
        </div>
    </router-link>
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
