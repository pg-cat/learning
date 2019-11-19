import Vue from 'vue'
import Vuex from 'vuex'

// 使用 vuex
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    str: '这是123,你大爷在哪',
    num: 3
  },
  getters: {
    addStr(state) {
      return state.str + '，臭不要脸！'
    },
    addNum(state) {
      return state.num * Math.PI
    }
  },
  mutations: {
    changeStr(state) {
      state.str = '我不是你大爷'
    },
    changeNum(state) {
      state.str = '我不是你大爷了 00000000'
    }
  },
  actions: {
    changeStr(context) {
      context.commit('changeStr')
    }
  }
})

export default store
