import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/app/home/home.module'
import Login from '@/app/login/login.module'

Vue.use(Router);

export default new Router({
  name: 'Router',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ],
})
