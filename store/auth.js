// import { firebaseAction } from 'vuexfire'

export const state = () => ({
  user: null,
})

export const actions = {
  onAuthStateChangedAction: (ctx, { authUser, claims }) => {
    if (authUser) {
      console.log('yas')
      const { uid, email } = authUser
      const user = { email, uid }
      ctx.commit('login', user)
    }
  },
}

export const mutations = {
  login: (state, val) => (state.user = val),
}
