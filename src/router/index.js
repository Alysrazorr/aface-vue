import Vue from 'vue'
import Router from 'vue-router'
import App from '../demo/App/App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    }
  ]
})