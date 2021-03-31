<template>
  <button
    class="p-1 bg-gray-800 ring-2 ring-gray-800 ring-offset-4 rounded-full shadow-md text-gray-200 transition-all transform duration-75 linear active:text-gray-100 active:shadow active:scale-95 hover:scale-105 hover:shadow-lg"
    :class="[fullColor]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButtonRound',
  props: {
    type: {
      type: String,
    },
  },
  computed: {
    fullColor() {
      let color
      if (this.type === 'success') {
        color = 'green'
      } else if (this.type === 'danger') {
        color = 'red'
      } else {
        color = 'yellow'
      }
      return `ring-offset-${color}-400 active:ring-offset-${color}-500 hover:ring-offset-${color}-300`
    },
  },
}
</script>

<style></style>
