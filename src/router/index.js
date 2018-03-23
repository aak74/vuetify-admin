import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Database from '../pages/Database'
import Users from '../pages/Users'

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
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  }
]

export default new Router({
    mode: 'history',
    routes
})