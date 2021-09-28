import { createStore } from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state={
  cartList:[{}]
}
const store = createStore({
  state,
  getters,
  mutations,
  actions,
  modules: {

  }
})

export default store
