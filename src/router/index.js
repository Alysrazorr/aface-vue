import Vue from 'vue'
import Router from 'vue-router'
import docs from '../docs'

Vue.use(Router)

export default new Router({
  routes: docs.routes
})
