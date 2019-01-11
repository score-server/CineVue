// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app.module'
import Router from './' //TODO rename index.js to router.config.js and main.js to main.module.js, fix import paths

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: Router,
  components: {App},
  template: '<App/>'
})
