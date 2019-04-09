import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/index/Index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [{
        path: '',
        name: 'test', // 如果name设置相同会出现，刷新当前页面跳转到别的路由的情况
        component: () => import('@/views/index/Test.vue'),
      },{
        path: 'test2',
        name: 'test2', // 如果name设置相同会出现，刷新当前页面跳转到别的路由的情况
        component: () => import('@/views/index/Test2.vue'),
      }]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/index2',
      name: 'index2',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/Index2.vue')
    },
  ]
})