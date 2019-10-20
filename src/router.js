import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  // { path: '/', redirect: '/' },
  {
    name: 'dashboard',
    meta: { title: 'Dashboard' },
    path: '/',
    component: require('./views/dashboard.vue').default
  },
  {
    name: 'account',
    meta: { title: 'Account' },
    path: '/account',
    component: require('./views/admin/account.vue').default
  }
];

const router = new VueRouter({
  mode: 'history',
  base: '/dashboard/',
  routes
});

export default router;