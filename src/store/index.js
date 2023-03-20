import axios from 'axios';
import { createStore } from 'vuex'

const state = {
  user: null,
  authIsReady: false
}

const store =  createStore({
  state,
  getters: {
    user: (state) => {
      return state.user;
    }
  },
  actions: {
    user(context, user) {
      context.commit('user', user)
    }
  },
  mutations: {
    user(state, user) {
      state.user = user;
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload
    }
  }
})

const getUser = async () => {
  const response  = await axios.get('users/me')
  store.commit('setAuthIsReady', true)
  store.commit('user', response.data.data[0])
}

getUser()

export default store