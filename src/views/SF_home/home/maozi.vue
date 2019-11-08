<template>
  <div>
    <div class="g-fz-30">maozi</div>
    <div>
      <button @click="click">点我向父组件传值</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "maozi",
  data() {
    return {
      num: 0
    }
  },
  methods: {
    click() {
      this.$emit("clickObj",{  /*clickObj是父组件里的方法名，点击这个方法会使num++*/
        num: this.num++
      })
    }
  }
}
</script>

<style scoped>

</style>
