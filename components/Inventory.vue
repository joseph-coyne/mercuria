<template>
  <div
    class="flex flex-col justify-between items-center h-full mb-20 overflow-hidden space-y-2"
  >
    <div
      class="z-0 scrollbox w-11/12 h-screen px-2 pt-4 grid grid-cols-5 gap-x-2 gap-y-4 overflow-y-auto rounded-xl"
    >
      <div
        v-for="i in 25"
        :key="i.id"
        class="h-16 w-12 overflow-hidden rounded-md shadow-md bg-gray-700 border-2 border-gray-800 ring-2 ring-gray-800 ring-offset-2 ring-offset-white shadow-inner"
      ></div>
    </div>

    <ul
      class="sticky bottom-0 flex flex-row items-center justify-between space-x-8 h-18 min-h-18 px-2 py-2 pb-4 bg-white border-b rounded-t-xl shadow-lg"
    >
      <li><base-svg file="helmet" size="h-8 w-8" /></li>
      <li><base-svg file="sword" size="h-8 w-8" /></li>
      <li><base-svg file="leather" size="h-8 w-8" /></li>
      <li><base-svg file="meat" size="h-8 w-8" /></li>
      <li><base-svg file="key" size="h-8 w-8" /></li>
      <li><base-svg file="books" size="h-8 w-8" /></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Inventory',
}
</script>

<style scoped>
.scrollbox {
  z-index: 10;
  background: linear-gradient(#ffffff 33%, rgba(255, 255, 255, 0)),
    linear-gradient(rgba(255, 255, 255, 0), #ffffff 66%) 0 100%,
    radial-gradient(
      farthest-side at 50% 0,
      rgba(107, 107, 107, 0.5),
      rgba(0, 0, 0, 0)
    ),
    radial-gradient(
        farthest-side at 50% 100%,
        rgba(107, 107, 107, 0.5),
        rgba(0, 0, 0, 0)
      )
      0 100%;
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-attachment: local, local, scroll, scroll;
  background-size: 100% 75px, 100% 75px, 100% 25px, 100% 25px;
}
</style>
