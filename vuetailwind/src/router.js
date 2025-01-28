// src/router.js
import { createRouter, createWebHistory } from 'vue-router'; 
import LoginPage from './pages/LoginPage.vue';


const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage,
  },

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
