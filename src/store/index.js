import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
    debug: true,
    state,
    getters,
    actions,
    mutations,
})

// actions.loadAll(store)

export default store
