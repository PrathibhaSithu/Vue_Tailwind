<template>
  <div id="app">
    <TopNavBar v-if="showTopNav"/>
    <router-view/>
  </div>
</template>

<script>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';

  export default {
    name: 'App',
    components: {
      TopNavBar,
    },
    setup() {
      const route = useRoute();

      const showTopNav = computed(() => {
        const noSidebarPaths = ['/',];
        return !noSidebarPaths.includes(route.path); 
      });

      return { showTopNav };
    },
  };
</script>

