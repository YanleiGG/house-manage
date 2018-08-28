import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    userId: null,
    username: '',
    path: 'http://localhost:3000'
  },
  mutations: {
    set_isLogin (state, { isLogin }) {
      state.isLogin = isLogin
    },
    set_userId (state, { userId }) {
      state.userId = userId
    },
    set_username (state, { username }) {
      state.username = username
    }
  }
})