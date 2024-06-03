import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LineupView from '../views/LineupView.vue';
import PlaymakerView from '../views/PlaymakerView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/lineup',
      name: 'lineup',
      component: LineupView
    },
    {
      path: '/playmaker',
      name: 'playmaker',
      component: PlaymakerView
    },
  ]
})

export default router
