// Import packages.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Home from './components/Home'
import platformVar from 'platformsh_variables'

Vue.use(VueRouter)
Vue.use(VueResource)

// Declare routes.
const routes = [
  {
    path: '/',
    component: Home
  }
]

// Declare router.
const router = new VueRouter({
  routes,
  mode: 'history'
})

// Get Platform.sh URL.
let entrypoint = Object.keys(platformVar).find(url => url.startsWith('https://api.'))

if (entrypoint) {
  Vue.http.options.root = entrypoint.substring(0, entrypoint.length)
}

// Initialize Vue App.
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  },
  router
}).$mount('#app')
