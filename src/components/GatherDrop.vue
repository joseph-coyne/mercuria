<template>
  <div
    class="w-4 h-4 transition-opacity duration-1000 ease-in bg-red-500"
    :class="[
      {
        'opacity-0': dropAlive === 'fade',
      },
    ]"
  >
    <div class="cursor-pointer w-full h-full" @click="collectDrop()"></div>
  </div>
</template>

<script>
export default {
  name: 'GatherDrop',
  // props: {
  //   dropItem: {
  //     type: Object,
  //   },
  // },
  data() {
    return {
      clearTimer: null,
      dropAlive: false,
      dropLocation: undefined,
    }
  },
  mounted() {
    this.dropTimer()
  },
  methods: {
    dropTimer() {
      this.clearTimer = setTimeout(() => {
        this.dropAlive = 'fade'
        setTimeout(() => {
          this.dropAlive = false
          this.$emit('missedDrop')
        }, 1000)
      }, 4000)
    },
    collectDrop() {
      this.dropAlive = false
      clearTimeout(this.clearTimer)
      this.$emit('collectedDrop')
    },
  },
}
</script>

<style></style>
