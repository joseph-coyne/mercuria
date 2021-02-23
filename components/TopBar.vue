<template>
  <div
    class="fixed top-0 z-30 flex flex-row items-center justify-between w-full"
  >
    <div class="flex flex-row items-center px-4 space-x-4">
      <!-- <base-svg file="heart" size="h-5 w-5 text-red-500" /> -->
      <div class="flex flex-row bg-green-500 rounded-full w-20 h-4 m-1"></div>

      <!-- <base-svg file="heart" size="h-5 w-5 text-red-500" /> -->
      <div class="flex flex-row bg-yellow-400 rounded-full w-20 h-4 m-1"></div>
    </div>
    <div
      class="flex flex-row items-center justify-between bg-gray-700 bg-opacity-50 rounded-full w-20 m-4 px-2"
    >
      <div
        class="rounded-full bg-yellow-500 w-4 h-4 transform -skew-y-12"
      ></div>
      <h1 class="text-white font-medium">1,724</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
}
</script>

<style></style>
