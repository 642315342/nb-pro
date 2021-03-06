import Vue from 'vue'
import Router from 'vue-router'
// import MyRouter from './plugins/myRouter'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      meta: { isKeepAlive: false },
      component: () => import(/* webpackChunkName: "login" */'./views/login'),
    },
    {
      path: '/imgLazyLoad',
      name: 'imgLazyLoad',
      meta: { isKeepAlive: false },
      component: () => import(/* webpackChunkName: "imgLazyLoad" */'./views/imgLazyLoad'),
    },
    {
      path: '/routerLazyLoad',
      name: 'routerLazyLoad',
      meta: { isKeepAlive: false },
      component: () => import(/* webpackChunkName: "routerLazyLoad" */'./views/routerLazyLoad'),
    },
    {
      path: '/about',
      name: 'about',
      meta: { isKeepAlive: false },
      component: () => import(/* webpackChunkName: "about" */'./views/about'),
    },
    {
      path: '/myVuex',
      name: 'myVuex',
      meta: { isKeepAlive: false },
      component: () => import(/* webpackChunkName: "myVuex" */'./views/myVuex'),
    },
    {
      path: '/inputTest',
      name: 'inputTest',
      meta: { isKeepAlive: false },
      component: () => import(/* webpackChunkName: "inputTest" */'./views/inputTest'),
    },
    {
      path: '/vue3Mouse',
      name: 'vue3Mouse',
      meta: { isKeepAlive: false },
      component: () => import(/* webpackChunkName: "inputTest" */'./views/vue3Mouse'),
    },
    {
      path: '/router/:id',
      name: 'router',
      meta: { isKeepAlive: false },
      component: () => import(/* webpackChunkName: "router" */'./views/router'),
    },
  ],
  // base: process.env.BASE_URL,
  // scrollBehavior(to, from, savedPosition) {
  //   if (from.meta.isKeepAlive) {
  //     console.log('isKeepAlive');
  //     from.meta.savedPosition = document.documentElement.scrollTop || document.body.scrollTop;
  //   }
  //   if (from.name === 'test2' && to.name === 'test1') {
  //     console.log('reset');
  //     from.meta.savedPosition = 0;
  //   }
  //   if (savedPosition) {
  //     return savedPosition;
  //   }
  //   return { x: 0, y: to.meta.savedPosition || 0 };
  // },
  //   component: () => import(/* webpackChunkName: "about" */ './views/login'),
})
// router.beforeEach((to, from, next) => {
//   console.log('beforeEach', to, from)
//   next()
// })
// router.afterEach((to, from) => {
//   console.log('afterEach', to, from)
// })
export default router
