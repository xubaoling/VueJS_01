import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routerConfig from './routerConfig.js'
import store from './store/'
Vue.use(VueRouter);
const router = new VueRouter({
  mode:'history',
  routes:routerConfig
});
require("./assets/css/base.css")

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
