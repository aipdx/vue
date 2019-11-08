<template>
  <div>
    <p class="g-fz-30">我是音乐子组件</p>
    <div class="g-mt-30">
      {{title}}
    </div>
    <div>
      {{propObj.title}}
    </div>
  </div>
</template>

<script>
export default {
  name: "music",
  props: {
    title: String,
    propObj: Object
  },
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>
