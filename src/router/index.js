import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/home/index.vue'
// import Index from '../components/music/index.vue'
// import Music from '../components/music/music.vue'
// import News from '../components/news/news.vue'  /*要加.vue，不然会报错*/

import index from '../views/index/index.vue'
import home from '../views/SF_home/home/home.vue'
import one from '../views/vuex_test/test/one.vue'
import two from '../views/vuex_test/test/two.vue'
import action from '../views/vuex_test/test/action.vue'


Vue.use(Router)
const router = new Router({
  mode:'history',
  routes: [
    // {path: '*', redirect: '/index'},/*重定向到home*/
    // { path: '/home', name: 'home', component: Home },
    /*{ path: '/index', name: 'index', component: Index,redirect: '/index/music',/!*重定向到music*!/
      children: [
        { path: 'music', name: 'music', component: Music}
      ]
    },*/
    // { path: '/news', name: 'news', component: News },
    /*组件传值*/
    { path: '/index', name: 'index', component: index},
    { path: '/home', name: 'home', component: home},
    { path: '/one', name: 'one', component: one},
    { path: '/two', name: 'two', component: two},
    { path: '/action', name: 'action', component: action},
  ]
})
export default router
