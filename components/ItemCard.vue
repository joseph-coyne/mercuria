<template>
  <div
    class="flex flex-col items-center justify-center w-1/4 overflow-hidden rounded-md shadow-md bg-gray-800 border-2 border-black ring-2 ring-gray-700 ring-offset-2 ring-offset-blue-500"
  >
    <div class="bg-gray-800 rounded-br-3xl overflow-hidden">
      <img src="@/static/img/ore/st_b_04.png" class="w-full" />
    </div>
    <div v-if="item" class="bg-white w-full text-center">
      <p class="font-bold text-sm leading-snug text-gray-700">1</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemCard',
  props: {
    item: {
      type: Object,
    },
  },
}
</script>

<style></style>
