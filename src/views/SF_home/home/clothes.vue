<template>
  <div class="main-box">
    <div>clother</div>
    <button @click="clickme">点我向父组件传值</button>
  </div>
</template>

<script>
export default {
  name: "clothes",
  data() {
    return {
      count:10,
    }
  },
  methods:{
    clickme(){
      //clickObjTitle相当于在父组件中自定义了一个事件，参考node的Event模块;后面的对象是为了给父组件传值
      this.$emit("clickObjTitle",{
        count:this.count++
      })
    }
  }
}
</script>

<style>
button {
  display: block;
  background-color: #0f79e4;
  padding: 10px;
  color: #fff;
  box-shadow: 1px 1px 1px #333333;
  border: 0;
  margin: 0 auto;
  margin-top: 10px;
}
</style>
