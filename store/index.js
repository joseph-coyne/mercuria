import { vuexfireMutations } from 'vuexfire'

export const store = () => ({
  mutations: {
    ...vuexfireMutations,
  },
})
