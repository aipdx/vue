import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex); //使用 vuex

const store = new Vuex.Store({
  state: {
    count: 0,
    num: 0,
    login: false,
    formData:{
      t1: {
        title:null
      }
    },
    todos: [
      { id: 1, text: 'text1--true', done: true },
      { id: 2, text: 'text2--false', done: false }
    ]
  },
  mutations: {
    Login(state, payload) {
      state.login = payload
    },
    add(state) {
      state.count ++
    },
    sub(state) {
      state.count --
    },
    addIncrement(state, payload) {
      state.num += payload.n
    },
    subIncrement(state, payload) {
      state.num -= payload.n
    },
    updataMessage(state, payload) {
      console.log(payload);
      if (payload.curposition.length === 2) {
        state.formData[payload.curposition[0]][payload.curposition[1]] = payload.newval
      } else if (payload.curposition.length === 3) {
        state.formData[payload.curposition[0]][payload.curposition[1]][payload.curposition[2]] = payload.newval
      }
    },
  },
  getters: {  //实时监听state值的变化(最新状态) // 用法类似组件中的 computed, 可以认为是store的计算属性
    doneTodos:state => { // Getter 接受 state 作为其第一个参数：
      return state.todos.filter(todo => todo.done)
    },
    doneTodosLength:(state, getters) => { // Getter 也可以接受其他 getter 作为第二个参数
      return getters.doneTodos.length
    }
  },
  actions: {
    addAction(context) { // context 与 store 实例具有相同方法和属性（但不是store 实例）
      setTimeout(() => {
        context.commit('add')
      },1000)
    }
  }
})
export default store;
