<template>
  <div id="app">
    <TopNavBar v-if="showTopNav"/>
    <div>
      <router-view/>
    </div>
    
  </div>
</template>

<script>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';

  import TopNavBar from './pages/CommonPages/TopNavBar.vue';


  export default {
    name: 'App',
    components: {
      // TopNav,
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

