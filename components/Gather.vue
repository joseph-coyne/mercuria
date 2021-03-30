<template>
  <div
    class="flex flex-col justify-center items-center p-4 rounded-lg shadow bg-yellow-300 bg-opacity-10"
  >
    <h1 class="font-semibold text-lg pt-20">
      {{ resource }}
    </h1>
    <ItemCard />
    <div
      class="flex flex-col items-center space-y-5 w-full rounded-md px-2 py-4"
    >
      <div class="relative pt-1 w-full">
        <div
          class="overflow-hidden h-4 text-xs flex border border-gray-800 rounded-sm ring-1 ring-gray-800 ring-offset-2 ring-offset-yellow-400 bg-gray-700"
        >
          <div
            :style="`width: ${progress}%`"
            class="shadow-none flex flex-col justify-center text-center text-white rounded-sm bg-gradient-to-b from-green-400 via-green-500 to-green-600 transition-all ease"
          ></div>
        </div>
      </div>
      <button
        class="p-1 bg-gray-800 ring-2 ring-gray-800 ring-offset-4 ring-offset-yellow-400 rounded-full shadow-md text-gray-200 transition-all transform duration-75 linear active:text-gray-100 active:ring-offset-yellow-500 active:shadow active:scale-95 hover:scale-105 hover:ring-offset-yellow-300 hover:shadow-lg"
        @click="gather"
      >
        <base-svg file="gather-bs"></base-svg>
      </button>
    </div>
  </div>
</template>

<script>
import BaseSvg from './BaseSvg.vue'
export default {
  components: { BaseSvg },
  name: 'Gather',
  data() {
    return {
      progress: 0,
      resource: 0,
      animate: false,
    }
  },
  watch: {
    resource(newValue, oldValue) {
      if (newValue > oldValue) {
        this.animate = true
      }
    },
  },
  methods: {
    gather() {
      this.progress += 10
      if (this.progress > 100) {
        this.resource += 1
        this.progress = 0
      }
    },
  },
}
</script>

<style></style>
