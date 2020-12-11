<template>
  <div>
    <input type="email" v-model="email" class="border" />
    <input type="password" v-model="password" class="border" />
    <button @click="signIn">Sign in</button>
    <input type="email" v-model="email" class="border" />
    <input type="password" v-model="password" class="border" />
    <button @click="signUp">Sign up</button>

    <button @click="signOut">Sign Out</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
    }
  },
  methods: {
    signIn() {
      this.$fire.auth.signInWithEmailAndPassword(this.email, this.password)
    },
    signUp() {
      this.$fire.auth.createUserWithEmailAndPassword(this.email, this.password)
    },
    signOut() {
      this.$fire.auth.signOut()
    },
  },
}
</script>

<style></style>
