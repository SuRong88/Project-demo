
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

// 全局变量
const state = {

}

// 全局函数
const mutations = {

}

// todo 与单页面不同，这里要返回函数
export default () => {
  return new Vuex.Store({
    state,
    mutations
  })
}
