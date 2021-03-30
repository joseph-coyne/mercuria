<template>
  <div class="fixed top-4 z-30 w-full">
    <div class="flex flex-row justify-between items-center px-4 space-x-4">
      <div class="flex flex-col space-y-2">
        <base-bar width="w-24" height="h-3" color="red"></base-bar>
        <base-bar width="w-24" height="h-3" color="yellow"></base-bar>
      </div>
      <div class="flex flex-row space-x-5">
        <base-resource-bar
          :resource="{ icon: 'gold-coin-t', quantity: 1782 }"
        ></base-resource-bar>

        <base-resource-bar
          :resource="{ icon: 'quicksilver-t', quantity: 16 }"
        ></base-resource-bar>
      </div>
    </div>
  </div>
</template>

<script>
import BaseBar from './BaseBar.vue'
import BaseResourceBar from './BaseResourceBar.vue'
export default {
  components: { BaseBar, BaseResourceBar },
  name: 'TopBar',
}
</script>

<style></style>
