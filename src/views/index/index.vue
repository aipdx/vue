<template>
  <div>
    <p class="g-fz-30">我是首页</p>
    <button @click="testProp">点击我</button>
    <!--子组件-->
    <music :title="title" :propObj="propObj"></music>
    <div class="g-c-88 g-fz-12">:title="title"   左边的是子组件的props里的，右边是父组件传递过去的值</div>
    <div class="g-c-88 g-fz-12">子向父的介质是自定义事件，父向子的介质是props中的属性。抓准这两点对于父子通信就好理解了</div>
    <div class="g-mt-30">
      <button @click="testPropNews">点击我</button>
      <news :content="content"></news>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      title:"我是为了给子组件传值用的",
      propObj:{
        title:"我是对象里面的title属性"
      },
      content: "我是父组件传递给news子组件的文字"
    }
  },
  mounted() {
    // this.testProp()
  },
  methods: {
    testProp: async function(){
      this.propObj.title = this.title = await this.title+"测试是否是响应式属性的!!!";
      return {title:this.title};
    },
    testPropNews() {
      this.content = '父组件改变了我的文字！'
    }
  },
}
</script>

<style scoped>

</style>
