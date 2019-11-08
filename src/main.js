import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/store'
import './assets/style/base.css'
import Music from './views/index/music.vue'
import News from './views/index/news.vue'
import Clother from './views/SF_home/home/clothes.vue'
import Maozi from './views/SF_home/home/maozi.vue'
Vue.component('Music',Music)
Vue.component('News',News)
Vue.component('Clother',Clother)
Vue.component('Maozi',Maozi)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
