import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const http = axios.create({
  baseUrl: 'http://localhost:3000/api'
})

Vue.use(Vuex)

const initialState = {
  loggedIn = false,
  user = {}
}

const mutations = {
  toggleLog (state) {
    if (localStorage.getItem('token')) {
      this.loggedIn = true
    } else {
      this.loggedIn = false
    }
  },
  setUser (state, payload) {
    this.user = payload
  }
}

const actions = {
  getUsersData ({ commit }) {
    http.get('/users/' + localStorage.getItem('token')).then((data) => {
      commit('setUser', data.data)
    })
  }
}

export default new Vuex.Store({
  state: {
    ...initialState
  },
  mutations,
  actions
})
