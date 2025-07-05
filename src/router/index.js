import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; // Importeremo la nostra nuova vista Home

const routes = [
  {
    path: '/',          // L'URL della pagina
    name: 'Home',       // Il nome della rotta
    component: Home     // Il componente da mostrare per questa rotta
  }
  // Qui in futuro aggiungerai altre pagine, es:
  // { path: '/about', name: 'About', component: () => import('../views/About.vue') }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
