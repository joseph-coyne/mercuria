<template>
  <div class="absolute inset-0">
    <bottom-sheet :initial="'closed'">
      <h1 class="font-semibold text-lg">Gather Resource - {{ resource }}</h1>
      <ItemCard />
      <div
        class="flex flex-col items-center space-y-2 w-full shadow rounded px-2 py-4"
      >
        <div class="relative pt-1 w-full">
          <div
            class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200"
          >
            <div
              :style="`width: ${progress}%`"
              class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
            ></div>
          </div>
        </div>
        <button
          class="bg-green-500 rounded-lg text-white px-4 py-1"
          @click="gather"
        >
          Click
        </button>
      </div>
    </bottom-sheet>
  </div>
</template>

<script>
import BottomSheet from './BottomSheet.vue'
export default {
  name: 'Gather',
  components: { BottomSheet },
  data() {
    return {
      progress: 0,
      resource: 0,
    }
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
