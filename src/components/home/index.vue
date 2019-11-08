<template>
  <div class="big">
    home <br/>
    <h2>hello</h2>
    <router-link :to="{ name: 'news' }">News</router-link>
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style lang="scss" scoped>
.big{
  font-size: 30px;

  h2{
    color: #0f79e4;
  }
}
</style>
