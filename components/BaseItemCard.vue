<template>
  <div
    class="flex flex-col items-center justify-center w-20 overflow-hidden rounded-md shadow-md bg-gray-800 border-2 border-gray-800 ring-2 ring-gray-800 ring-offset-2"
    :class="fullColor"
  >
    <div class="bg-gray-800 overflow-hidden">
      <img :src="require(`@/static/img/ore/${item.icon}.png`)" class="w-full" />
    </div>
    <div v-if="item.quantity" class="bg-white w-full text-center">
      <p class="font-bold text-sm leading-snug text-gray-700">1</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseItemCard',
  props: {
    item: {
      type: Object,
    },
  },
  computed: {
    fullColor() {
      let color
      if (this.item.rarity === 'common') {
        color = 'gray'
      } else if (this.item.rarity === 'uncommon') {
        color = 'green'
      } else if (this.item.rarity === 'rare') {
        color = 'blue'
      } else if (this.item.rarity === 'mercurial') {
        color = 'purple'
      }
      return `ring-offset-${color}-500`
    },
  },
}
</script>

<style></style>
