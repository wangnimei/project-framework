import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFondPage from '../components/404'

Vue.use(VueRouter)

const routes = [{
    name: 'index',
    path: '/',
    redirect: {
      name: 'home',
      params: {
        id: 1
      }
    }
  },
  {
    name: 'home',
    path: '/home/:id',
    component: () =>
      import ( /* webpackChunkName: "home" */ '../components/Home')
  },
  {
    name: 'other',
    path: '/other/:id',
    component: () =>
      import ( /* webpackChunkName: "other" */ '../components/Other')
  },
  {
    path: '*',
    component: NotFondPage
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})