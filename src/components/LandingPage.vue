<template>
    <router-link to="/tasklists">No Task</router-link>
</template>

<script>

import Tasklist from './tasklists/Tasklist';
import Task from './tasklists/Task';

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
