<template>
  <div id="app">
    <!--<h1 class="main-box">vue -V查看的是vue-cli的版本</h1>-->
    <!--<router-link :to="{ name: 'index' }">父组件传值给子组件</router-link>-->
    <!--<router-link :to="{ name: 'home' }" class="g-ml-30">子组件传递给父组件</router-link>-->
    <router-link :to="{ name: 'one' }">vuex one传值</router-link>
    <router-link :to="{ name: 'two' }" class="g-ml-30">vuex two传值</router-link>
    <router-link :to="{ name: 'action' }" class="g-ml-30">vuex action传值</router-link>
    <router-view></router-view> <!--是需要点击或者配置重定向才能显示的,匹配到的路由显示在这里-->
  </div>
</template>

<script>
import { getClassify } from '@/api/login.js'
export default {
  name: 'app',
  mounted() {
    this.getL()
  },
  methods: {
    getL() {
      getClassify().then(res => {
        console.log(res);
        console.log(process.env.VUE_APP_BASE_API)
      })
    }
  }
}
</script>

<style>
/*@import url('assets/style/base.css');*/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
