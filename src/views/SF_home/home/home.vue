<template>
  <div>
    <h1>我是home父组件</h1>
    <div class="g-mt-30">
      <p>我是clothes子组件</p>
      <clother @clickObjTitle="clickObjTitle"></clother>
    </div>
    <div class="g-mt-30">
      <p>我是maozi子组件</p>
      <maozi @clickObj="clickObj"></maozi>
      <p>{{ nums }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      nums: null
    }
  },
  methods: {
    clickObjTitle(params){
      console.log(params); /*params是子组件传递过来的一个对象*/
      /*count: 12
         __proto__: Object
      */
      console.log(params.count);
    },
    clickObj(params){
      console.log(params); /*params是子组件传递过来的一个对象*/
      console.log(params.num);
      this.nums = params.num
    }
  },
}
</script>

<style scoped>

</style>
