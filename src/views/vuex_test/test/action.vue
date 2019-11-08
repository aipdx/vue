<template>
  <div>
    <p class="g-fz-28">action</p>
    <input name="name" placeholder="" type="text" autocomplete="off" :value="activeFormData.title" @input="updataMessage($event,'t1.title')">
    <div class="g-mt-30">
      <button @click="add">+</button>
      <button @click="add_action">action +</button>
      <h2>{{count}}</h2>
      <button @click="sub">-</button>
      <div>
        test: {{doneTodos[0].text}} <br>
        length: {{doneTodosLength}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "action",
  computed: { //computed用来监控自己定义的变量  computed比较适合对多个变量或者对象进行处理后返回一个结果值
    activeFormData() {
      return this.$store.state.formData.t1
    },
    count() {
      return this.$store.state.count
    },
    doneTodos(){
      return this.$store.getters.doneTodos // -> [{ id: 1, text: 'text1--true', done: true }]
    },
    doneTodosLength(){
      return this.$store.getters.doneTodosLength // -> 1
    }
  },
  methods: {
    updataMessage(e,dataposition){
      let newposition = dataposition.split('.');
      this.$store.commit('updataMessage',{
        newval:e.target.value,
        curposition:newposition
      })
    },
    add() {
      this.$store.commit("add")
    },
    sub() {
      this.$store.commit("sub")
    },
    add_action() {
      this.$store.dispatch('addAction')
    },
  }
}
</script>

<style scoped>
button {
  display: block;
  background-color: #8b86e4;
  padding: 8px 20px;
  color: #fff;
  box-shadow: 1px 1px 1px #333333;
  border: 0;
  margin: 0 auto;
  margin-top: 10px;
}
input {
  width: 90px;
  height: 32px;
  border: 1px solid #ddd;
}
</style>
