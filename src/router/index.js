import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; 
// 1. Importa il nuovo componente Contatti
import Contatti from '../views/Contatti.vue'; 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // 2. Aggiungi la rotta per la pagina Contatti
  {
    path: '/contatti',        // L'URL che attiverà questa rotta
    name: 'Contatti',         // Il nome della rotta
    component: Contatti       // Il componente da visualizzare
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;