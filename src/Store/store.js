import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      if (state.count > 0) {
        state.count--
      }
    },
    reset(state) {
      state.count = 0
    },
    setCount(state, value) {
      state.count = value
    },
  },
})

