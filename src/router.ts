import { createRouter, createWebHistory } from 'vue-router';
import Home from '../src/views/HomePage.vue'; 
import About from '../src/views/AboutPage.vue';
import Academic from './views/AcademicPage.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About},
  { path: '/academic', component: Academic},

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
