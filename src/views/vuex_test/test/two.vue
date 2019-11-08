<template>
  <div>
    <p class="g-fz-28">two</p>
    <p v-show="msg">one让我显示</p>
    <div class="g-mt-30">
      <button @click="add1">+</button>
      <h2>{{ num }}</h2>
      <button @click="sub1">-</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "two",
  data() {
    return {
      msg: false,
    }
  },
  computed: {
    num() {
      return this.$store.state.num
    }
  },
  mounted() {
    this.getLogin()
  },
  methods: {
    getLogin() {
     this.msg = this.$store.state.login
     console.log(this.msg);
    },
    add1() {
      this.$store.commit("addIncrement",{
        n: 10
      })
    },
    sub1() {
      this.$store.commit("subIncrement",{
        n: 5
      })
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
