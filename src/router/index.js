import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/index';
import TablePage from '@/components/table';

Vue.use(Router)

export default new Router({
  mode: 'history', // history hash
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/table',
      name: 'table',
      component: TablePage
    },
    {path: '*', redirect: '/'}
  ]
})
