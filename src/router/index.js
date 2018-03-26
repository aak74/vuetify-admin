import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Database from '../pages/Database'
import Entity from '../pages/Entity'
import entities from '../config/entities'

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
]

entities.forEach((entity) => {
  routes.push({
    path: '/' + entity.link,
    name: entity.routename,
    meta: { path: entity.apiPath, entity: entity.name, fields: entity.fields },
    component: Entity
  })
}) 


export default new Router({
    mode: 'history',
    routes
})