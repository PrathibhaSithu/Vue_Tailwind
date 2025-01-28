// src/router.js
import { createRouter, createWebHistory } from 'vue-router'; 
import LoginPage from './pages/LoginPage.vue';
import HomePage from './pages/HomePage.vue';


const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/homepage',
    name: 'HomePage',
    component: HomePage,
  },

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
