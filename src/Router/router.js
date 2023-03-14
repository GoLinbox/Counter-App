import { createRouter, createWebHistory } from 'vue-router';
import CounterApp from '../Views/CounterApp';
import HomeApp from '../Views/HomeApp';
import NotFound from '../Views/NotFound';

const routes = [
  {
    path: '/counter',
    name: 'CounterApp',
    component: CounterApp
  },
  {
    path: '/',
    name: 'Home',
    component: HomeApp
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
