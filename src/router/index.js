import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import GestionVisiteur from '../views/GestionVisiteur';
import GestionObjet from '../views/GestionObjet';
import DashboardVisiteur from '../views/DashboardVisiteur';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/nouveau-visiteur',
    name: 'nouveau-visiteur',
    component: GestionVisiteur,
    props: true
  },
  {
    path: '/dashboard-visiteur',
    name: 'dashboard-visiteur',
    component: DashboardVisiteur,
  },
  {
    path: '/objet',
    name: 'objet',
    component: GestionObjet,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
