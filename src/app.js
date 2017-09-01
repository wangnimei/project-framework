import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import './sass/style.scss';

Vue.use(VueRouter);

const routes = [
  { name: 'index', path: '/', redirect: 'home' },
	{ name: 'home', path: '/home', component: () => import(/* webpackChunkName: "home" */ './components/Home.vue') },
	{ name: 'other', path: '/other', component: () => import(/* webpackChunkName: "other" */ './components/Other.vue') }
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