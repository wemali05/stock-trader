import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes } from './routes'
import store from './store/store'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.root = 'https://vue-palylist-e6df4.firebaseio.com/'

Vue.filter('currency', (value) => {
    return '$' + value.toLocaleString();
});

const router = new VueRouter({
    routes,
    mode: 'history'
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
