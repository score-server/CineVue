import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import hello from '@/pages/hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: hello
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ],
})
