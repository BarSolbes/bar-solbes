import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Calendario from '../views/Calendario.vue'
import AddReserva from '../views/AddReserva.vue'
import ListAlergenos from '../views/ListAlergenos.vue'
import aboutUs from '../views/AboutUs.vue'
import Menu from '../views/Menu.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/calendario',
      name: 'calendario',
      component: Calendario
    },
    {
      path: '/addReserva/:serveiId',
      name: 'addReserva',
      component: AddReserva,
      props: true
    },
    {
      path: '/listAlergenos',
      name: 'alergenos',
      component: ListAlergenos
    },
    {
      path: '/menus',
      name: 'listMenus',
      component: Menu
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs
    },
  ]
})

export default router
