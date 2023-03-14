import { computed } from 'vue'
import { useStore } from 'vuex'

export default function useCounter() {
  const store = useStore()

  const count = computed({
    get: () => store.state.count,
    set: (value) => store.commit('setCount', value),
  })

  function increment() {
    store.commit('increment')
  }

  function decrement() {
    store.commit('decrement')
  }

  function reset() {
    store.commit('reset')
  }

  function setValue(value) {
    store.commit('setCount', value)
  }

  return {
    count,
    increment,
    decrement,
    reset,
    setValue,
  }
}
