export const state = () => ({
  list: [
    {
      name: 'Spiridon',
      time: 0.0002,
    },
    {
      name: 'Spiridon',
      time: 0.00001,
    },
  ],
})

export const getters = {
  getSortedList(state) {
    return state.list.slice().sort((a, b) => {
      if (a.time > b.time) return 1
      if (a.time < b.time) return -1
      return 0
    })
  },
}

export const actions = {
  saveResult({ commit }, result) {
    commit('STORE_RESULT', result)
  },
}

export const mutations = {
  STORE_RESULT(state, result) {
    state.list.push(result)
  },
}
