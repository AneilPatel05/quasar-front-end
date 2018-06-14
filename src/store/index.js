import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user
  }
})

if (process.env.DEV && module.hot) {
  module.hot.accept(['./user'], () => {
    const newUser = require('./user').default
    store.hotUpdate({ modules: { user: newUser } })
  })
}
export default store
