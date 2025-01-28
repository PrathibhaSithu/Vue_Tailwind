<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';

  export default {
    name: 'App',
  };
</script>
