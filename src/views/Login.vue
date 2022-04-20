<template>
  <div class="">
    <input v-model="email" type="email" class="border" />
    <input v-model="password" type="password" class="border" />
    <button @click="signIn">Sign in</button>
    <input v-model="email" type="email" class="border" />
    <input v-model="password" type="password" class="border" />
    <button @click="signUp">Sign up</button>

    <button @click="signOut">Sign Out</button>
    username <input v-model="username" type="text"  />
    profession
    <select v-model="profession" name="profession">
      <option value="Blacksmith">Blacksmith</option>
      <option value="Carpenter">Carpenter</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
      username: null,
      profession: null,
    }
  },
  // methods: {
  //   signIn() {
  //     this.$fire.auth.signInWithEmailAndPassword(this.email, this.password)
  //   },
  //   signUp() {
  //     this.$fire.auth
  //       .createUserWithEmailAndPassword(this.email, this.password)
  //       .then((res) => {
  //         this.$fire.database.ref(`users/${res.user.uid}`).set({
  //           username: this.username,
  //           profession: this.profession,
  //         })
  //       })
  //   },
  //   signOut() {
  //     this.$fire.auth.signOut()
  //   },
  // },
}
</script>

<style></style>
