import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

const state = {
    location: {},
    address: ""
}

const getters = {
    location: state => state.location,
    address: state => state.address
}

const mutations = {
    setLocation(state, location) {
        if (location) {
            state.location = location;
        } else {
            state.location = null
        }
    },
    setAddress(state, address) {
        if (address) {
            state.address = address;
        } else {
            state.address = "";
        }
    }
}

const actions = {
    setLocation({ commit }, location) {
        commit('setLocation', location)
    },
    setAddress({ commit }, address) {
        commit('setAddress', address)
    }

}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})