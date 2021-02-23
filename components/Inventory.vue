<template>
  <div
    class="flex flex-col justify-between items-center h-full mb-20 overflow-hidden space-y-2"
  >
    <div class="flex flex-col w-11/12 rounded-md bg-gray-300 pb-2">
      <div
        class="w-full grid grid-rows-4 grid-cols-4 grid-flow-col gap-2 items-center justify-items-center py-4"
      >
        <div class="h-12 w-12 bg-white rounded-md shadow"></div>
        <div class="h-12 w-12 bg-white rounded-md shadow"></div>
        <div class="h-12 w-12 bg-white rounded-md shadow"></div>
        <div class="h-12 w-12 bg-white rounded-md shadow"></div>
        <div class="row-span-4 col-span-2 h-full w-24 bg-gray-500"></div>
        <div class="h-12 w-12 bg-white rounded-md shadow"></div>
        <div class="h-12 w-12 bg-white rounded-md shadow"></div>
        <div class="h-12 w-12 bg-white rounded-md shadow"></div>
        <div class="h-12 w-12 bg-white rounded-md shadow"></div>
      </div>
      <div class="grid grid-rows-3 grid-cols-2 grid-flows-col gap-x-4 px-4">
        <div class="pb-2">
          <label class="text-xs font-medium" for="strength">Strength</label>
          <div class="w-full h-2 px-2 bg-red-500 rounded-full"></div>
        </div>
        <div class="pb-2">
          <label class="text-xs font-medium" for="Wisdom">Wisdom</label>
          <div class="w-full h-2 px-2 bg-blue-500 rounded-full"></div>
        </div>
        <div class="pb-2">
          <label class="text-xs font-medium" for="Charisma">Charisma</label>
          <div class="w-full h-2 px-2 bg-purple-500 rounded-full"></div>
        </div>
        <div class="pb-2">
          <label class="text-xs font-medium" for="Dexterity">Dexterity</label>
          <div class="w-full h-2 px-2 bg-green-500 rounded-full"></div>
        </div>
        <div class="pb-2">
          <label class="text-xs font-medium" for="Perception">Perception</label>
          <div class="w-full h-2 px-2 bg-yellow-400 rounded-full"></div>
        </div>
        <div class="pb-2">
          <label class="text-xs font-medium" for="Constitution"
            >Constitution</label
          >
          <div class="w-full h-2 bg-red-800 rounded-full"></div>
        </div>
      </div>
    </div>
    <div class="w-11/12 grid grid-rows-3 grid-cols-6 gap-2 w-3/4">
      <div
        v-for="i in 18"
        :key="i.id"
        class="h-12 w-12 bg-gray-300 rounded-md shadow-inner"
      ></div>
    </div>

    <ul
      class="h-1/6 flex flex-row items-center justify-between space-x-8 p-2 border"
    >
      <li><base-svg file="helmet" size="h-8 w-8" /></li>
      <li><base-svg file="sword" size="h-8 w-8" /></li>
      <li><base-svg file="leather" size="h-8 w-8" /></li>
      <li><base-svg file="meat" size="h-8 w-8" /></li>
      <li><base-svg file="key" size="h-8 w-8" /></li>
      <li><base-svg file="books" size="h-8 w-8" /></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Inventory',
}
</script>

<style></style>
