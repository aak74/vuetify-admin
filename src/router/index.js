import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Database from '../pages/Database'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/database',
    // name: 'Dashboard',
    component: Database
  }
]

export default new Router({
    mode: 'history',
    routes
})