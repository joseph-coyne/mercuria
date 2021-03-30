<template>
  <div
    class="fixed top-4 z-30 flex flex-row items-center justify-between w-full"
  >
    <div class="flex flex-row items-center px-4 space-x-4">
      <div class="flex flex-col space-y-2">
        <base-bar width="w-24" height="h-3" color="red"></base-bar>
        <base-bar width="w-24" height="h-3" color="yellow"></base-bar>
      </div>
      <div class="relative flex flex-row w-24 justify-center items-center">
        <div
          class="absolute left-0 p-1 bg-gray-800 ring-2 ring-gray-800 ring-offset-2 ring-offset-yellow-400 rounded-full"
        >
          <img src="@/static/img/gold-coin-t.png" class="w-5" />
        </div>
        <div
          class="text-center w-full bg-gray-800 ring-2 ring-gray-800 ring-offset-2 ring-offset-yellow-400 rounded-full"
        >
          <h1 class="pl-5 py-0.5 text-white text-xs font-medium">1,724</h1>
        </div>
      </div>
      <div class="relative flex flex-row w-24 justify-center items-center">
        <div
          class="absolute left-0 p-1 bg-gray-800 ring-2 ring-gray-800 ring-offset-2 ring-offset-yellow-400 rounded-full"
        >
          <img src="@/static/img/quicksilver-t.png" class="w-5" />
        </div>
        <div
          class="text-center w-full bg-gray-800 ring-2 ring-gray-800 ring-offset-2 ring-offset-yellow-400 rounded-full"
        >
          <h1 class="pl-5 py-0.5 text-white text-xs font-medium">16</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseBar from './BaseBar.vue'
export default {
  components: { BaseBar },
  name: 'TopBar',
}
</script>

<style></style>
