import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Tasks from '@/components/Tasks'
import Complaints from '@/components/Complaints'
import Delivery from '@/components/Delivery'
import History from '@/components/History'
import Inventory from '@/components/Inventory'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/tasks',
      name: 'Tasks',
      component: Tasks
    },
    {
      path: '/complaintsDelivery',
      name: 'Complaints',
      component: Complaints
    },
    {
      path: '/delivery',
      name: 'Delivery',
      component: Delivery
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/inventory',
      name: 'Inventory',
      component: Inventory
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ],
  mode: 'history'
})
