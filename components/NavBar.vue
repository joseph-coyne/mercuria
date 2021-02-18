<template>
  <nav
    class="fixed bottom-0 flex flex-row justify-between items-center px-4 rounded-b-xl bg-white shadow-lg z-50 h-16 w-full overflow-hidden"
  >
    <NuxtLink to="/"> <base-svg file="shop" size="h-8"> </base-svg></NuxtLink>
    <NuxtLink to="gather">
      <base-svg file="gather-bs" size="h-8"> </base-svg
    ></NuxtLink>
    <NuxtLink to="/">
      <base-svg file="craft-bs" size="h-8"> </base-svg
    ></NuxtLink>
    <!-- <NuxtLink to="/signin">Sign In</NuxtLink> -->
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapState('auth', ['user']),
  },
}
</script>

<style></style>
