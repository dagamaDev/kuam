import { createRouter, createWebHistory } from 'vue-router';
import Home from '../src/views/HomePage.vue'; 
import About from '../src/views/AboutPage.vue';
import Academic from './views/AcademicPage.vue';
import Admission from './views/AdmissionPage.vue';
import Research from './views/ResearchPage.vue';
import Job from './views/JobPage.vue';
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About},
  { path: '/academic', component: Academic},
  { path: '/admission', component: Admission},
  { path: '/research', component: Research},
  { path: '/job', component: Job},

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
