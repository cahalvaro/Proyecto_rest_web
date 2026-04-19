import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'   // Importa la vista Login

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/login' },   // Redirige raíz al login
    { path: '/login', name: 'Login', component: Login }
  ]
})
