import './assets/main.css';
import router from './router';
import "ionicons/dist/css/ionicons.min.css";


import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(router).mount('#app')
