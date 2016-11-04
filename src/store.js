import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Initial state
const state = {
    count: 0
}

// Actions
const actions = {
    INCREMENT_COUNTER: ({ commit }) => {
        commit('INCREMENT_COUNTER')
    }
}

// Mutations
const mutations = {
    INCREMENT_COUNTER: (state) => {
        state.count++
    }
}

const store = new Vuex.Store({
    state,
    mutations,
    actions
})

export default store
