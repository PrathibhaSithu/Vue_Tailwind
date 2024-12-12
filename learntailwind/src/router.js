import Start from './pages/Start.vue';

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start,
  },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
  
export default router;