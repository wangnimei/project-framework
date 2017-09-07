import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  { name: 'index', path: '/', redirect: 'home' },
	{ name: 'home', path: '/home', component: () => import(/* webpackChunkName: "home" */ './components/Home') },
	{ name: 'other', path: '/other', component: () => import(/* webpackChunkName: "other" */ './components/Other') }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});