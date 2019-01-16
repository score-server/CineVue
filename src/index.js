import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/app/home/home.view'
import MovieOverview from '@/app/movie-overview/movie-overview.view'
import Login from '@/app/login/login.view'

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
    },
    {
      path: '/movies',
      name: 'movie-overview',
      component: MovieOverview
    }
  ],
})
