import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import other from './other'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    other
  }
})
