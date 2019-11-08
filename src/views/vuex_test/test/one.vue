<template>
  <div>
    <p class="g-fz-28">one</p>
    <div class="g-mt-30">
      <button @click="add">+</button>
      <button @click="add_action">action +</button>
      <h2>{{count}}</h2>
      <button @click="sub">-</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "one",
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  mounted() {
    this.$store.commit("Login",true);
  },
  methods: {
    add() {
      this.$store.commit('add');/*add/sub是store.js定义的方法*/
    },
    sub(){
      this.$store.commit('sub');
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
</style>
