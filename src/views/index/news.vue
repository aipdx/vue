<template>
  <div>
    <p class="g-fz-30">我是新闻组件</p>
    <div class="g-c-42b">哈好，{{ content }}</div>
  </div>
</template>

<script>
export default {
  name: "news",
  props: {
    content: String
  },
  data() {  /*必须要有data，否则传值不成功*/
    return {}
  }
}
</script>

<style scoped>

</style>
