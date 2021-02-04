// import { firebaseAction } from 'vuexfire'

export const state = () => ({
  user: null,
  users: [],
})

export const actions = {
  onAuthStateChangedAction(ctx, { authUser }) {
    if (authUser) {
      ctx.commit('login', authUser)
      this.$fire.database
        .ref(`users/${authUser.uid}`)
        .once('value', (snapshot) => {
          ctx.commit('setUserData', snapshot.val())
        })
    }
  },
}

export const mutations = {
  login: (state, val) => {
    const { uid, email } = val
    state.user = { email, uid }
  },
  setUserData: (state, val) => (state.userData = val),
}
