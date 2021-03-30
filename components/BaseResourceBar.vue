<template>
  <div class="relative flex flex-row w-24 justify-center items-center w-20">
    <div
      class="absolute left-0 p-1 bg-gray-800 ring-2 ring-gray-800 ring-offset-2 ring-offset-yellow-400 rounded-full"
    >
      <img :src="require(`@/static/img/${resource.icon}.png`)" class="w-5" />
    </div>
    <div
      class="text-center w-full bg-gray-800 ring-2 ring-gray-800 ring-offset-2 ring-offset-yellow-400 rounded-full"
    >
      <h1 class="pl-5 py-0.5 text-white text-xs font-medium">
        {{ resource.quantity }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseResourceBar',
  props: {
    resource: {
      type: Object,
    },
  },
}
</script>

<style></style>
