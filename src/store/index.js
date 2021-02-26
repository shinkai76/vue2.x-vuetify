import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    snackbar: {
      isShow: false,
      msg: ''
    }
  },
  mutations: {
    TOGGLE_SNACKBAR(state,{ msg='', bool = true }) {
      state.snackbar.isShow = bool
      state.snackbar.msg = msg
    }
  },
  actions: {
  },
  modules: {
  }
})
